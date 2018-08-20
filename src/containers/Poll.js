import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' // withRouter allow to connect the route as property with connect
import UnAnsweredPoll from '../components/UnAnsweredPoll'
import AnsweredPoll from '../components/AnsweredPoll'

class ViewPoll extends Component {
  render() {
    if (this.props.question !== null && this.props.authedUser) { // load the question object
      let pollWithAnswerAndNot

      const { question, color, authedUser } = this.props
      const id = this.props.match.params.id
      const arrayVotes = [...question.optionTwo.votes, question.optionOne.votes]
      const vote = arrayVotes.some(e => e === authedUser)
      if (vote) {
        // console.log('Answered')
        pollWithAnswerAndNot = <AnsweredPoll />
      } else {
        // console.log('Unanswered')
        pollWithAnswerAndNot = <UnAnsweredPoll />
      }
    }

    return (
      <div className="ViewPoll">
        ViewPoll
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
  }
}
export default withRouter(connect(mapStateToProps)(ViewPoll))
