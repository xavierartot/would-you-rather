import React, { Component } from 'react'
import { Card, CardTitle,CardBody, CardHeader } from 'reactstrap'
import { connect } from 'react-redux'
// import { MdPlaylistAddCheck } from 'react-icons/md'
import { formatDate } from '../utils/helper'
import { RadioGroup, RadioButton } from 'react-radio-buttons'
import { handleChooseQuestion } from '../actions/choose'
// import { addAnswerPoll } from '../actions/choose'


class UnAnsweredPoll extends Component {
  onChange = (value) => {
    const {
      authedUser, question, dispatch,
    } = this.props

    // dispatch the choice in question reducer
    dispatch(handleChooseQuestion(question.id, authedUser, value))
    // console.log(question.id, value)
  }

  colorsTheme = (background, color) => {
    //const {
      //color, background,
    //} = this.props
    let radioColor = ''
    switch (background) {
      case 'dark':
        radioColor =   [ '#343a40 !important', 'white']
        break;
      case 'primary':
        radioColor =   [ '#007bff !important', 'white']
        break;
      case 'secondary':
        radioColor = [ '#6c757d !important', 'white']
        break;
      case 'success':
        radioColor = [ '#28a745 !important', 'white']
        break;
      case 'danger':
        radioColor = [ '#dc3545 !important', 'white']
        break;
      case 'warning':
        radioColor = [ '#ffc107 !important', 'white']
        break;
      case 'info':
        radioColor = [ '#17a2b8 !important', 'black']
        break;
      default:
        radioColor = [ '#343a40 !important', 'white']
    }
    return radioColor
  }
  render() {
    const {
      authedUser, question, users, color, background,
    } = this.props
    //console.log(this.colorsTheme(color, background) )
    const theme = this.colorsTheme(color, background)
    const themeBgc = theme[1]
    const themeColor = theme[0]
    console.log(themeColor , themeBgc  )
    // const id = question[id]
    const user = users[authedUser]
    // console.log(question)
    const optionOneText = question.optionOne.text
    const optionTwoText = question.optionTwo.text
    return (
      <div className="UnAnsweredPoll">
        <Card className="mb-3 shadow rounded  d-flex flex-column">
          <CardHeader>
            <div className="d-flex justify-content-start mb-3">
              <img alt={user.id} className="rounded-circle mr-3"
                src={user.avatarURL}
                style={{ height: '60px', width: '60px' }}
              />
              <span className="align-items-center d-flex">{user.name}</span>
            </div>
            <div>{formatDate(question.timestamp)}</div>
          </CardHeader>
          <CardBody>
            <CardTitle className="mb-0 card-title h3 mb-3">
              Would You Rather
            </CardTitle>
            <RadioGroup  horizontal onChange={this.onChange} >
              <RadioButton iconSize={20} pointStyling="test2" rootColor={themeColor} value="optionOne">
                {optionOneText}
              </RadioButton>
              <RadioButton buttonStyling="test" iconSize={20} rootColor={themeColor} value="optionTwo">
                { optionTwoText }
              </RadioButton>
            </RadioGroup>
          </CardBody>
        </Card>
      </div>
    )
  }
}
function mapStateToProps({ users, authedUser, template }) {
  console.log(template.color)
  return {
    users,
    authedUser,
    color: template.color,
    background: template.background,
  }
}
export default connect(mapStateToProps)(UnAnsweredPoll)
