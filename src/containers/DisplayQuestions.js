import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom' // withRouter allow to connect the route as property with connect
import {
  ListGroup, ListGroupItem, Badge,
  Card, Button, CardTitle, CardText, Row, Col, CardSubtitle,
} from 'reactstrap'

class DisplayQuestions extends Component {
  render() {
    const { idQuestions, user } = this.props

    if (idQuestions === null) {
      return <p>This question doesn't exist</p>
    }
    console.log(idQuestions)
    return (
      <div>
        <CardSubtitle className="mb-3">Create by: {user.name}</CardSubtitle>
        <div className="card-text">
          <ListGroup>
            <ListGroupItem className="justify-content-between">
              <Link to={`/Poll/${idQuestions.id}`}>
                <Button className="mr-2">
                  {idQuestions.optionOne.text}
                </Button>
              </Link>
              <Badge pill>1</Badge>
            </ListGroupItem>
            <ListGroupItem className="justify-content-between">
              <Link to={`/Poll/${idQuestions.id}`}>
                <Button className="mr-2">
                  {idQuestions.optionTwo.text}
                </Button>
              </Link>
              <Badge pill>2</Badge>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    )
  }
}
function mapStateToProps({ questions, authedUser, users }, { idQuestions }) {
  return {
    idQuestions: questions[idQuestions] || null,
    user: users[authedUser],
  }
}
export default withRouter(connect(mapStateToProps)(DisplayQuestions))
