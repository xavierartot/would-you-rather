import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ListGroup, ListGroupItem, Badge,
  // Card, Button, CardTitle, CardText, Row, Col
} from 'reactstrap'
// import slice from 'lodash/slice'

class Poll extends Component {
  render() {
    // const { questionsAnswered, questionsUnAnswered } = this.props
    // console.log(questionsAnswered, questionsUnAnswered)
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
export default connect()(Poll)
