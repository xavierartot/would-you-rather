import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import pullAll from 'lodash/pullAll'
import DisplayQuestions from './DisplayQuestions'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardBody, Badge, Row } from 'reactstrap'
import classnames from 'classnames'

class Home extends Component {
  static propTypes = {
    authedUser: PropTypes.string,
    color: PropTypes.string,
    questionsUnAnswered: PropTypes.array,
    questionsAnswered: PropTypes.array,
  }
    state = {
      activeTab: '1',
    };

    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab,
        })
      }
    }
    componentDidMount() {
    // console.log(this.props.store.getState())
    }
    render() {
      const {
        questionsUnAnswered, questionsAnswered, authedUser, background,
      } = this.props
      // if (this.props.authedUser === null) { //user is not logged launch the modal
      // return <Modal buttonLabel="open" />
      // }

      return (
        <div className="Home">
          <Nav className="justify-content-center mb-3 " tabs>
            <NavItem className="dddd">
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1') }}
              >
             Unanswered
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2') }}
              >
              Answered
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab} className="">
            <TabPane tabId="1">
              <Row className="justify-content-center">
                <Card className="mb-3 col-md-auto">
                  <CardBody>
                    <CardTitle className="mb-0">
                      {authedUser } Unanswered  <Badge color={background}>{ questionsUnAnswered.length}</Badge> games
                    </CardTitle>
                  </CardBody>
                </Card>
              </Row>
              <Row className="justify-content-around flex-wrap d-flex justify-content-around">
                {questionsUnAnswered.map(item => (
                  <Card key={item} body className="shadow rounded mb-3 col-sm-4 m-2">
                    <DisplayQuestions
                      idQuestions={item}
                      tag="div"
                    />
                  </Card>
              ))
              }
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row className="justify-content-center">
                <Card className="mb-3 col-md-auto">
                  <CardBody>
                    <CardTitle className="mb-0">
                      {authedUser } Answered  <Badge className={`bg-${background}`} color={background}>{ questionsAnswered.length}</Badge> games
                    </CardTitle>
                  </CardBody>
                </Card>
              </Row>
              <Row className="justify-content-around flex-wrap d-flex justify-content-around">
                {questionsAnswered.map(item => (
                  <Card key={item} body className="shadow rounded mb-3 col-sm-4 m-2">
                    <DisplayQuestions
                      idQuestions={item}
                      tag="div"
                    />
                  </Card>
              ))
              }
              </Row>
            </TabPane>
          </TabContent>
        </div>
      )
    }
}

function mapStateToProps({
  authedUser, users, questions, template, state,
}) {
  // console.log(questions )
  // let sortQuestions = questions  !== undefined
  // ? Object.values(questions).sort((a,b) => b.timestamp - a.timestamp)
  // :''
  // console.log(sortQuestions)

  // console.log(users, questions)
  let tempQA = Object.values(users)
    .filter(e => e.id === authedUser)
    .map(e => e.answers)
  // console.log(tempQA)
  let qa = { ...tempQA[0] }
  qa = Object.keys(qa)// on recupere les id reponduent dans un tableau
  tempQA = qa
  // console.log(tempQA)
  const objQuestionsAnswered = tempQA.map(id => questions[id])
  // console.log(objQuestionsAnswered )
  const sortQuestionsAnswered = objQuestionsAnswered !== undefined
    ? objQuestionsAnswered.sort((a, b) => b.timestamp - a.timestamp)
      .map((e, i) => (e !== undefined
        ? e.id
        : i))
    : ''
  // console.log(sortQuestionsAnswered )

  let questionsUnAnswered = sortQuestionsAnswered
  let q = { ...questions }// destructure les questions
  q = Object.keys(q)// q = all id
  // console.log(q, qa)//qu = id answer
  const qr = pullAll(q, qa) // Lodash method, compare and  les reponses  avec les questionsAnswered
  // console.log(qr)

  // sort the result
  const tempQUA = qr.map((id, i) => (questions !== questions[id]
    ? questions[id]
    : i)).sort((a, b) => b.timestamp - a.timestamp)
    .map(e => e.id)
  // console.log(tempQUA )

  questionsUnAnswered = tempQUA
  return {
    authedUser,
    questionsAnswered: sortQuestionsAnswered,
    questionsUnAnswered,
    color: template.color,
    background: template.background,
  }
}
export default connect(mapStateToProps)(Home)

