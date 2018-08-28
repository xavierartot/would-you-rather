import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' // withRouter allow to connect the route as property with connect
import UnAnsweredPoll from '../containers/UnAnsweredPoll'
import AnsweredPoll from '../containers/AnsweredPoll'

class ViewPoll extends Component {
  render() {
    const { question, authedUser } = this.props
    if (authedUser === null) {
      if (question === null) {
        console.log(this.props.question)
        console.log('redirect')
      }
    }
    let vote,
      whichPoll = null
    if (this.props.question !== null && this.props.authedUser) { // load the question object
      const arrayVotes = [...question.optionOne.votes, ...question.optionTwo.votes]
      vote = arrayVotes.some(e => e === authedUser)
      if (vote) {
        whichPoll = <AnsweredPoll question={question} />
      } else {
        whichPoll = <UnAnsweredPoll question={question} />
      }
    }
    return (
      <div className="d-flex align-items-center align-self-center justify-content-center">
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
  // console.log(questions, users, id)
  return {
    authedUser,
    color: template.color,
    question,
    users,
  }
}
export default withRouter(connect(mapStateToProps)(ViewPoll))
