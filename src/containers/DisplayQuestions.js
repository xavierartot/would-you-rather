import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom' // withRouter allow to connect the route as property with connect
import { ListGroup, ListGroupItem, Badge, CardSubtitle } from 'reactstrap'
// import { IoMdAdd } from 'react-icons/io'
import { MdPlaylistAdd } from 'react-icons/md'

// import { FaBeer } from 'react-icons/fa'

class DisplayQuestions extends Component {
  render() {
    const { idQuestions, user, color } = this.props

    if (idQuestions === null) {
      return <p>This question doesn't exist</p>
    }
    const { id, optionTwo, optionOne } = idQuestions
    return (
      <div>
        <div className="d-flex justify-content-between mb-3">
          <CardSubtitle className="d-flex align-items-center">Create by: {user.name}</CardSubtitle>
          <Link className="d-flex align-items-center" to={`/add/${id}`}>
            <MdPlaylistAdd className={`text-${color} plus-icons `} />
          </Link>
        </div>
        <div className="card-text">
          <ListGroup>
            <ListGroupItem className="justify-content-between pl-2">
              <Badge className="mr-2" color={color} pill>1</Badge>
              <Link to={`/Poll/${idQuestions.id}`}>
                <button className={`btn btn-outline-${color}`}>
                  {optionOne.text}
                </button>
              </Link>
            </ListGroupItem>
            <ListGroupItem className="justify-content-between pl-2">
              <Badge className="mr-2" color={color} pill>2</Badge>
              <Link to={`/Poll/${idQuestions.id}`}>
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
  return {
    idQuestions: questions[idQuestions] || null,
    user: users[authedUser],
    color: template.color,
  }
}
export default withRouter(connect(mapStateToProps)(DisplayQuestions))
