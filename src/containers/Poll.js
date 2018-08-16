import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap'
// import slice from 'lodash/slice'

class Poll extends Component {
  render() {
    const { questionsAnswered, questionsUnAnswered } = this.props
    console.log(questionsAnswered, questionsUnAnswered)
    return (
      <div className="Poll">
        <ListGroup>
          <ListGroupItem active><Badge pill>1</Badge></ListGroupItem>
          {
          // questionsAnswered.map((item, i) => (
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
function mapStateToProps({ authedUser }, IdsQuestions) {
  // console.log(Object.entries(IdsQuestions))

  // console.log(Object.entries(IdsQuestions), IdsQuestions.IdsQuestions, [IdsQuestions.IdsQuestions])
  const temp = [...IdsQuestions.IdsQuestions]
  console.log(temp[0])
  console.log(temp[1])
  return {
    questionsAnswered: temp[0],
    questionsUnAnswered: temp[1],
  }
}
export default connect(mapStateToProps)(Poll)
