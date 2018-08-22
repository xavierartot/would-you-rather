import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' // withRouter allow to connect the route as property with connect
import UnAnsweredPoll from '../components/UnAnsweredPoll'
import AnsweredPoll from '../components/AnsweredPoll'

class ViewPoll extends Component {
  render() {
    let vote,
      whichPoll = null
    if (this.props.question !== null && this.props.authedUser) { // load the question object
      const {
        question, authedUser,
      } = this.props
      const arrayVotes = [...question.optionOne.votes, ...question.optionTwo.votes]
      vote = arrayVotes.some(e => e === authedUser)
      if (vote) {
        whichPoll = <AnsweredPoll question={question} />
      } else {
        whichPoll = <UnAnsweredPoll question={question} />
      }
    }

    return (
      <div
        className="ViewPoll d-flex justify-content-center align-items-center"
        style={{
        height: '82vh',
}}
      >
        {whichPoll}
      </div>
    )
  }
}
function mapStateToProps({
  authedUser, users, template, questions,
}, { match }) {
  const { id } = match.params
  const question = questions[id] || null
  return {
    authedUser,
    color: template.color,
    question,
    users,
  }
}
export default withRouter(connect(mapStateToProps)(ViewPoll))
