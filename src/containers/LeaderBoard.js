import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { connect } from 'react-redux'
import LeaderBoardList from './LeaderBoardList'

class LeaderBoard extends Component {
  render() {
    const { color, users, totalQuestion } = this.props
    const arrayUsers = Object.values(users)
    // console.log(totalQuestion.length)
    return (
      <div className="LeaderBoard table-responsive-sm">
        <Table className="ddd">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">User</th>
              <th scope="col">Poll Created</th>
              <th scope="col">Poll Unanswered</th>
            </tr>
          </thead>
          <tbody>
            {arrayUsers.map((user, i) => (
              <tr
                key={user.id}
                className={(i % 2 === 0) ? `table-${color}` : ''}
              >
                <th scope={user.id}>{i + 1}</th>
                <th>
                  <img alt={`avatar of ${user.name}`} className="rounded-circle mr-2" src={user.avatarURL} style={{ height: '40px', width: '40px' }} />
                  {user.name}
                </th>
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
function mapStateToProps({ users, questions, template }) {
  const totalQuestion = Object.values(questions)
  // totalQuestion = totalQuestion.length
  console.log(totalQuestion)
  return {
    users,
    questions,
    totalQuestion,
    color: template.color,
  }
}
export default connect(mapStateToProps)(LeaderBoard)
