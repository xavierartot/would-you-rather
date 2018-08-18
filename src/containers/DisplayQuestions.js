import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom' // withRouter allow to connect the route as property with connect
import {
  ListGroup, ListGroupItem, Badge,
  Card, Button, CardTitle, CardText, Row, Col, CardSubtitle,
} from 'reactstrap'

class DisplayQuestions extends Component {
  render() {
    const { idQuestions, user, color } = this.props

    if (idQuestions === null) {
      return <p>This question doesn't exist</p>
    }
    // console.log(idQuestions)
    return (
      <div>
        <CardSubtitle className="mb-3">Create by: {user.name}</CardSubtitle>
        <div className="card-text">
          <ListGroup>
            <ListGroupItem className="justify-content-between pl-2">
              <Badge className="mr-2" pill>1</Badge>
              <Link to={`/Poll/${idQuestions.id}`}>
                <button className={`btn btn-${color}`}>
                  {idQuestions.optionOne.text}
                </button>
              </Link>
            </ListGroupItem>
            <ListGroupItem className="justify-content-between pl-2">
              <Badge className="mr-2" pill>2</Badge>
              <Link to={`/Poll/${idQuestions.id}`}>
                <button className={`btn btn-${color}`}>
                  {idQuestions.optionTwo.text}
                </button>
              </Link>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    )
  }
}
function mapStateToProps({
  questions, authedUser, users, template,
}, { idQuestions }) {
  return {
    idQuestions: questions[idQuestions] || null,
    user: users[authedUser],
    color: template.color,
  }
}
export default withRouter(connect(mapStateToProps)(DisplayQuestions))
