import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { connect } from 'react-redux'
import LeaderBoardList from './LeaderBoardList'

class LeaderBoard extends Component {
  render() {
    const { users, totalQuestion } = this.props

    const arrayUsers = Object.values(users)
    // console.log(totalQuestion.length)
    return (
      <div className="LeaderBoard">
        <Table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Poll Created</th>
              <th>Poll Unanswered</th>
            </tr>
          </thead>
          <tbody>
            {arrayUsers.map((user, i) => (
              <tr key={user.id}>
                <th scope={user.id}>{i + 1}</th>
                <th>{user.name}</th>
                <th>{user.questions && user.questions.length}</th>
                <th>
                  <LeaderBoardList list={user.answers} totalQuestion={totalQuestion} />
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
function mapStateToProps({ users, questions }) {
  const totalQuestion = Object.values(questions)
  // totalQuestion = totalQuestion.length
  console.log(totalQuestion)
  return {
    users,
    questions,
    totalQuestion,
  }
}
export default connect(mapStateToProps)(LeaderBoard)
