import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoardAnswered extends Component {
  render() {
    const { id, users } = this.props
    const answeredUsers = Object.values(users[id].answers).length
    // console.log(answeredUsers)
    return (
      <div className="LeaderBoardAnswered">
        {answeredUsers}
      </div>
    )
  }
}
function mapStateToProps({ users }) {
  return {
    users,
  }
}
export default connect(mapStateToProps)(LeaderBoardAnswered)
