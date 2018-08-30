import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'
import LeaderBoardUnAnswered from './LeaderBoardUnAnswered'
import LeaderBoardAnswered from './LeaderBoardAnswered'

class LeaderBoard extends Component {
  render() {
    const {
      color, users, totalQuestion, background,
    } = this.props
    return (
      <div className="LeaderBoard table-responsive-sm">
        <Table>
          <thead>
            <tr className={`bg-${background} ${color}`}>
              <th scope="col">Rank</th>
              <th scope="col">User</th>
              <th scope="col">Poll Created</th>
              <th scope="col">Poll Answered</th>
              <th scope="col">Poll Unanswered</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr
                key={user.id}
                className={(i % 2 === 0) ? `table-${color}` : ''}
              >
                <td className="font-weight-bold text-center">{i + 1}  </td>
                <td style={{ verticalAlign: 'inherit' }} valign="center">
                  <img
                    alt={`avatar of ${user.name}`}
                    className="rounded-circle mr-2"
                    src={user.avatarURL}
                    style={{ height: '40px', width: '40px' }}
                  />
                  {user.name}
                </td>
                <td align="center" style={{ verticalAlign: 'inherit' }} valign="center">
                  {user.questions && (
                  <Badge
                    color={background}
                    style={{ fontSize: '1rem' }}
                  >
                    {user.questions.length}
                  </Badge>

                  )}
                </td>
                <td align="center" style={{ verticalAlign: 'inherit' }} valign="center">
                  <LeaderBoardAnswered id={user.id} />
                </td>
                <td align="center" style={{ verticalAlign: 'inherit' }} valign="center">
                  <LeaderBoardUnAnswered list={user.answers} totalQuestion={totalQuestion} />
                </td>

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
  return {
    users: Object.values(users),
    questions,
    totalQuestion,
    color: template.color,
    background: template.background,
  }
}
export default connect(mapStateToProps)(LeaderBoard)
