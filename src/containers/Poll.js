import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom' // withRouter allow to connect the route as property with connect
import UnAnsweredPoll from '../containers/UnAnsweredPoll'
import AnsweredPoll from '../containers/AnsweredPoll'
import isEmpty from 'lodash/isEmpty'

// import PageNotFound from '../components/PageNotFound'

class ViewPoll extends Component {
  state = {
    idRoute: 'test',
  }
  componentDidMount() {
  }
  render() {
    if (redirectDynamicly) {
      return <Redirect to="/404" />
    }

    const {
      redirectDynamicly, questions, question, authedUser,
    } = this.props
    let vote,
      whichPoll = null
    if (question !== null && authedUser) { // load the question object
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
  const q = Object.values(questions)
  // console.log(q)
  const temp = q.map(e => e.id)
  // console.log(temp, id)
  let redirectDynamicly
  for (let i = 0, len = temp.length; i < len; i++) {
    if (temp[i] !== id) {
      redirectDynamicly = true // redirect
      // console.log(temp[i], id, redirectDynamicly, i)
    } else if (temp[i] === id) {
      redirectDynamicly = false
      // console.log(temp[i], id, redirectDynamicly, i)
      break
    }
  }
  return {
    authedUser,
    color: template.color,
    question,
    questions,
    users,
    redirectDynamicly,
  }
}
export default withRouter(connect(mapStateToProps)(ViewPoll))
