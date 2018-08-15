import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap'

class Poll extends Component {
  render() {
    const { questionsAnswers } = this.props
    console.log([questionsAnswers[0][1]])
    return (
      <div className="Poll">
        <ListGroup>
          <ListGroupItem active><Badge pill>1</Badge></ListGroupItem>
          {
          // questionsAnswers.map((item, i) => (
          //   <ListGroupItem key={item.id}>
          //     {item.author}<Badge pill>1</Badge>
          //   </ListGroupItem>
          // ))
          }
        </ListGroup>
      </div>
    )
  }
}
function mapStateToProps({ authedUser }, questions) {
  console.log(Object.entries(questions), questions.questions, [questions.questions])
  return {
    questionsAnswers: Object.entries(questions),
  }
}
export default connect(mapStateToProps)(Poll)
