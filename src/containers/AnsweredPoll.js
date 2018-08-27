import React, { Component } from 'react'
import { Button, Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap'
import { formatDate } from '../utils/helper'
import { connect } from 'react-redux'
 import { MdCheck } from 'react-icons/md'
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
      <div className="d-flex justify-content-center answeredPoll">
        <Card className="d-flex flex-column">
          <CardHeader>Created: {formatDate(question.timestamp)} by {users[authedUser].name} - voted</CardHeader>
          <CardBody className="d-flex flex-row justify-content-between">
            <CardImg
              alt={users[authedUser].avatarURL}
							className="rounded mr-2"
							src={users[authedUser].avatarURL}
							style={{ height: '40%', width: '40%' }} top
            />
            <div className="d-flex flex-column mb-4">
              <p className="h1 mb-3">Would you rather </p>
              {
              voteOne === true || voteTwo === true
              ? <div>
                <div>
                </div>
                <CardText className={`text-${color}`} style={{ fontSize: '1.6rem' }}>
                  {voteOne === true
                  ? <Button className={`btn btn-outline-${color}`} style={{ fontSize: '1.6rem' }}>{question.optionOne.text}<MdPlaylistAddCheck className={`text-${color}`} style={{ fontSize: '1.5rem' }} /></Button>

                  : question.optionOne.text
}
                </CardText>
                <CardText className={`text-${color}`} style={{ fontSize: '1.6rem' }} >
                  {voteTwo === true
                  ?   <Button className={`btn btn-outline-${color}`} style={{ fontSize: '1.6rem' }}><MdCheck  className={`text-${color}`} style={{ fontSize: '1.8rem' }} />{question.optionTwo.text}  </Button>
                  : question.optionTwo.text
}
                </CardText>
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
function mapStateToProps({ users, authedUser, template }, props) {
  const {question} = props
  const numberUsers = Object.values(users).length
  console.log(numberUsers )
  console.log(question.optionOne.votes)
  console.log(question.optionTwo.votes)
  const oo = question.optionOne.votes
  const ot = question.optionTwo.votes
  console.log(oo.length)
  console.log(ot.length)
//the number of people who voted for that option
let numberOptionOne = oo.length
let numberOptionTwo = ot.length
  return {
    users,
    authedUser,
    color: template.color,
    background: template.background,
numberOptionOne,
numberOptionTwo,
  }
}
export default connect(mapStateToProps)(AnsweredPoll)
