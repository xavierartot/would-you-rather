import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardHeader } from 'reactstrap'
import { formatDate } from '../utils/helper'
import { connect } from 'react-redux'
import AnswerPollStatistics from './AnswerPollStatistics'
import flatMapDeep from 'lodash/flatMapDeep'

class AnsweredPoll extends Component {
  render() {
    const {
      statistics,
    } = this.props
    return (
      <div className="answeredPoll ">
        <Card className="card " style={{ width: '23rem' }}>
          <CardHeader>Created: {statistics.dateCreate} by {statistics.name} - You have already voted</CardHeader>
          <CardBody className="">
            <CardImg
              alt={statistics.avatar}
              className="rounded mr-2"
              src={statistics.avatar}
              top
              width="100%"
            />
            <p className="h3 mb-0 mt-3 text-align-center d-block">Would you rather </p>
            <AnswerPollStatistics statistics={statistics} />
          </CardBody>
        </Card>
      </div>
    )
  }
}
function mapStateToProps({ users, authedUser, template }, { question }) {
  // text answer
  console.log(question.optionOne.text)
  console.log(question.optionTwo.text)
  const voteOne = question.optionOne.votes.some(e => e === authedUser),
    voteTwo = question.optionTwo.votes.some(e => e === authedUser)
  console.log(voteOne)
  console.log(voteTwo)

  // the number of people who voted for that option;
  const answers = Object.values(users)
    .map(e =>
      Object.entries(e.answers))
  const flat = flatMapDeep(answers)
  console.log(flat)

  const arrayTotalAnswers = []
  const idQuestion = question.id
  for (let i = 0, len = flat.length; i < len; i++) {
    if (i % 2 === 0 && flat[i] === idQuestion) {
      arrayTotalAnswers.push(flat[i], flat[i + 1])
      console.log(flat[i])
      console.log(flat[i + 1])
    }
  }
  console.log(arrayTotalAnswers)

  let countOptionOne = 0,
    countOptionTwo = 0
  for (let i = 0, len = arrayTotalAnswers.length; i < len; i++) {
    // console.log(arrayTotalAnswers[i])
    if (i % 2 === 1) {
      if (arrayTotalAnswers[i] === 'optionOne') {
        console.log(arrayTotalAnswers[i])
        countOptionOne++
      } else if (arrayTotalAnswers[i] === 'optionTwo') {
        console.log(arrayTotalAnswers[i])
        countOptionTwo++
      }
    }
  }
  const totalUsers = Object.values(users).length
  // percentage: the percentage of people who voted for that option.

  const percentageOptionOneVotes = countOptionOne <= 0
    ? null
    : `${((countOptionOne / totalUsers) * 100).toFixed(2)}%`
  const percentageOptionTwoVotes = countOptionTwo <= 0
    ? null
    : `${((countOptionTwo / totalUsers) * 100).toFixed(2)}%`

  console.log(countOptionOne, countOptionTwo)
  console.log(percentageOptionOneVotes, percentageOptionTwoVotes)
  console.log(users[authedUser].avatarURL)
  const statistics = {
    avatar: users[authedUser].avatarURL,
    name: users[authedUser].name,
    percentageOptionOneVotes,
    percentageOptionTwoVotes,
    voteOne,
    voteTwo,
    countOptionOne,
    countOptionTwo,
    dateCreate: formatDate(question.timestamp),
    textVoteOne: question.optionOne.text,
    textVoteTwo: question.optionTwo.text,
  }

  return {
    statistics,
  }
}
export default connect(mapStateToProps)(AnsweredPoll)
