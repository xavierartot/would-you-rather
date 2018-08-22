import React, { Component } from 'react'
import { Button, Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap'
import { connect } from 'react-redux'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { formatDate } from '../utils/helper'
import { RadioGroup, RadioButton } from 'react-radio-buttons'
import { choose } from '../actions/choose'

class UnAnsweredPoll extends Component {
  onChange = (value) => {
    const {
      authedUser, question, users, color,
    } = this.props
    const optionTwoVotes = question.optionTwo.votes
    if (value === 'optionOne') {
      // dipatch the login id in optionOne.votes[]
      // console.log(value, optionTwoVotes)
      this.props.dispatch(choose(question.id, authedUser, value))
    } else if (value === 'optionTwo') {
      // dipatch the login id in optionTwo.votes[]
      console.log(value, optionTwoVotes)
    }
  }
  render() {
    const {
      authedUser, question, users, color,
    } = this.props
    // const id = question[id]
    const user = users[authedUser]
    // console.log(question)
    const optionOneText = question.optionOne.text
    const optionTwoText = question.optionTwo.text
    return (
      <div className="UnAnsweredPoll">
        <div>{user.avatarURL}</div>
        <div>{user.name}</div>
        <div>{formatDate(question.timestamp)}</div>
        <h1>Would You Rather</h1>
        <RadioGroup horizontal onChange={this.onChange}>
          <RadioButton iconSize={20} value="optionOne">
            {optionOneText}
          </RadioButton>
          <RadioButton iconSize={20} value="optionTwo">
            { optionTwoText }
          </RadioButton>
        </RadioGroup>
      </div>
    )
  }
}
function mapStateToProps({ users, authedUser, template }) {
  return {
    users,
    authedUser,
    color: template.color,
  }
}
export default connect(mapStateToProps)(UnAnsweredPoll)
