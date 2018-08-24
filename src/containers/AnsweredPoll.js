import React, { Component } from 'react'
import { Button, Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap'
import { formatDate } from '../utils/helper'
import { connect } from 'react-redux'
// import { MdCheck } from 'react-icons/md'
// import { MdNetworkCheck } from 'react-icons/md'
// import { MdCheckBox } from 'react-icons/md'
// import { MdCheckBoxOutlineBlank } from 'react-icons/md'
// import { MdRadioButtonChecked } from 'react-icons/md'
// import { MdCheckCircle } from 'react-icons/md'
import { MdPlaylistAddCheck } from 'react-icons/md'


// import { MdPlaylistAdd } from 'react-icons/md'

class AnsweredPoll extends Component {
  render() {
    const {
      authedUser, users, question, color,
    } = this.props
    // console.log(question.optionOne.text)
    // console.log(question.optionTwo.text)
    const voteOne = question.optionOne.votes.some(e => e === authedUser)
    const voteTwo = question.optionTwo.votes.some(e => e === authedUser)
    // console.log(voteOne, voteTwo)
    return (
      <div className="d-flex justify-content-center">
        <Card className="d-flex flex-column">
          <CardHeader>Created: {formatDate(question.timestamp)} by {users[authedUser].name}</CardHeader>
          <CardBody className="d-flex flex-row justify-content-between">
            <CardImg alt={users[authedUser].avatarURL} className="rounded mr-2" src={users[authedUser].avatarURL} style={{ height: '40%', width: '40%' }} top />
            <div className="d-flex flex-column mb-4">
              {
              voteOne === true || voteTwo === true
              ? <div>
                <CardText className={`text-${color}`} style={{ fontSize: '2rem' }}>
                  {voteOne === true
                  ? <Button className={`btn btn-outline-${color}`} style={{ fontSize: '2rem' }}>{question.optionOne.text}</Button>
                  : question.optionOne.text
}
                </CardText>
                <CardText className={`text-${color}`} style={{ fontSize: '2rem' }} >
                  {voteTwo === true
                  ? <Button className={`btn btn-outline-${color}`} style={{ fontSize: '2rem' }}>{question.optionTwo.text}</Button>
                  : question.optionTwo.text
}
                </CardText>
                <MdPlaylistAddCheck className={`text-${color}`} style={{ fontSize: '6rem' }} />
              </div>
              : null
              }
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}
function mapStateToProps({ users, authedUser, template }) {
  return {
    users,
    authedUser,
    color: template.color,
    background: template.background,
  }
}
export default connect(mapStateToProps)(AnsweredPoll)
