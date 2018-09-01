import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom' // withRouter allow to connect the route as property with connect
import { ListGroup, ListGroupItem, Badge, CardSubtitle } from 'reactstrap'
// import { IoMdAdd } from 'react-icons/io'
// import { MdPlaylistAdd } from 'react-icons/md'
// import { MdViewList } from 'react-icons/md'
// import { formatDate } from '../utils/helper';

// import { FaBeer } from 'react-icons/fa'

class DisplayQuestions extends Component {
  render() {
    const {
      idQuestions, color, background,
    } = this.props

    // console.log(idQuestions )
    if (idQuestions === null) {
      return <p>This question doesn't exist</p>
    }
    const { optionTwo, optionOne } = idQuestions
    return (
      <div>
        <div className="d-flex justify-content-between mb-3">
          {/*  <CardSubtitle className="d-flex align-items-center">Create by: {user.name}</CardSubtitle> */}
          <CardSubtitle className="d-flex align-items-center h4">Would You Rather</CardSubtitle>
        </div>
        <div className="card-text">
          <ListGroup>
            <ListGroupItem className="justify-content-between pl-2">
              <Badge className="mr-2" color={background} pill>1</Badge>
              <Link to={`/questions/${idQuestions.id}`}>
                <button className={`btn btn-outline-${color}`}>
                  {optionOne.text}
                </button>
              </Link>
            </ListGroupItem>
            <ListGroupItem className="justify-content-between pl-2">
              <Badge className="mr-2" color={background} pill>2</Badge>
              <Link to={`/questions/${idQuestions.id}`}>
                <button className={`btn btn-outline-${color}`}>
                  {optionTwo.text}
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
  // let time, temp
  // if (idQuestions !== null) {
  // temp = {...questions[idQuestions]}
  // time = temp.timestamp
  // }
  return {
    idQuestions: questions[idQuestions] || null,
    // user: users[authedUser],
    color: template.color,
    background: template.background,
    // timestamp: time,
  }
}
export default withRouter(connect(mapStateToProps)(DisplayQuestions))
