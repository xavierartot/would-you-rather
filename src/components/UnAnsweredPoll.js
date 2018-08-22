import React, { Component } from 'react'
import { Button, Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap'
import { connect } from 'react-redux'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { formatDate } from '../utils/helper'
import { RadioGroup, RadioButton } from 'react-radio-buttons'
import { handleChooseQuestion } from '../actions/choose'

class UnAnsweredPoll extends Component {
  onChange = (value) => {
    const {
      authedUser, question, users, color, dispatch,
    } = this.props

    // dispatch the choice in question reducer
    dispatch(handleChooseQuestion(question.id, authedUser, value))

    // TODO
    // dispatch the answer in users
    // answers: {
    // id: value,
    // '6ni6ok3ym7mf1p33lnez': 'optionOne',
    // am8ehyc8byjqgar0jgpub9: 'optionTwo',
    // loxhs1bqm25b708cmbf3g: 'optionTwo',
    // },
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
