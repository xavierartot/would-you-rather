import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardHeader } from 'reactstrap'
import { formatDate } from '../utils/helper'
import { connect } from 'react-redux'
import AnswerPollStatistics from './AnswerPollStatistics'


// import { MdPlaylistAdd } from 'react-icons/md'

class AnsweredPoll extends Component {
  render() {
    const {
      authedUser, users, question, numberOptionOne, numberOptionTwo, percentageOptionOneVotes, percentageOptionTwoVotes, voteOne, voteTwo,
    } = this.props
    console.log(numberOptionOne)
    return (
      <div className="answeredPoll ">
        <Card className="card " style={{ width: '23rem' }}>
          <CardHeader>Created: {formatDate(question.timestamp)} by {users[authedUser].name} - You already voted</CardHeader>
          <CardBody className="">
            <CardImg
              alt={users[authedUser].avatarURL}
              className="rounded mr-2"
              src={users[authedUser].avatarURL}
              top
              width="100%"
            />
            <p className="h3 mb-3 mt-3 text-align-center d-block">Would you rather </p>
            {
              voteOne === true || voteTwo === true
                ?
                  voteOne
                  ? <AnswerPollStatistics
                    numberOption={numberOptionOne}
                    percentageOption={percentageOptionOneVotes}
                    textVoteOne={question.optionOne.text}
                    textVoteTwo={question.optionTwo.text}
                    vote="voteOne"
                  />
                  : <AnswerPollStatistics
                    numberOption={numberOptionTwo}
                    percentageOption={percentageOptionTwoVotes}
                    textVoteOne={question.optionOne.text}
                    textVoteTwo={question.optionTwo.text}
                    vote="voteTwo"
                  />
                : null
              }
          </CardBody>
        </Card>
      </div>
    )
  }
}
function mapStateToProps({ users, authedUser, template }, props) {
  const { question } = props,
    voteOne = question.optionOne.votes,
    voteTwo = question.optionTwo.votes,
    totalUsers = Object.values(users).length,
    numberOptionOne = question.optionOne.votes.length,
    numberOptionTwo = question.optionTwo.votes.length,
    percentageOptionOneVotes = numberOptionOne && numberOptionOne <= 0
      ? null
      : `${((numberOptionOne / totalUsers) * 100).toFixed(2)}%`,
    percentageOptionTwoVotes = numberOptionTwo && numberOptionTwo <= 0
      ? null
      : `${((numberOptionTwo / totalUsers) * 100).toFixed(2)}%`
  return {
    users,
    authedUser,
    color: template.color,
    background: template.background,
    numberOptionOne,
    numberOptionTwo,
    percentageOptionOneVotes,
    percentageOptionTwoVotes,
    voteOne: voteOne.some(e => e === authedUser),
    voteTwo: voteTwo.some(e => e === authedUser),
  }
}
export default connect(mapStateToProps)(AnsweredPoll)
