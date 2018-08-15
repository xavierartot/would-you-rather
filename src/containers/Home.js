import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import Modal from '../containers/Modal'

class Home extends Component {
  render() {
    const { questionsByUsers } = this.props
    console.log(questionsByUsers)
    if (this.props.authedUser === null) {
      return <Modal buttonLabel="open" />
    }
    return (
      <div className="Home">
        <h1>Polls</h1>
        <Poll questions={questionsByUsers} />
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  const questionsUsers = Object.values(users).filter(e => e.id === authedUser)
  const questionsByUsers = questionsUsers.map(e => e.answers)
  return {
    authedUser,
    questionsByUsers: questionsByUsers[0],
  }
}
export default connect(mapStateToProps)(Home)
