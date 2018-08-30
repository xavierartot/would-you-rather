import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'

class LeaderBoardAnswered extends Component {
  render() {
    const {
      id, users, background, color,
    } = this.props
    const answeredUsers = Object.values(users[id].answers).length
    // console.log(answeredUsers)
    return (
      <div className="LeaderBoardAnswered">
        <Badge
          color={background}
          style={{ fontSize: '1rem', color: ` ${color} ` }}
        >
          {answeredUsers}
        </Badge>
      </div>
    )
  }
}
function mapStateToProps({ users, template }) {
  return {
    users,
    color: template.color,
    background: template.background,
  }
}
export default connect(mapStateToProps)(LeaderBoardAnswered)
