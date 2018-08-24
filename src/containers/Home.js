import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Modal from '../containers/Modal'
import pullAll from 'lodash/pullAll'
import DisplayQuestions from './DisplayQuestions'
import { Card, Row, Col, CardTitle, CardBody, Badge } from 'reactstrap'

class Home extends Component {
  static propTypes = {
    authedUser: PropTypes.string,
    color: PropTypes.string,
    questionsUnAnswered: PropTypes.array,
    questionsAnswered: PropTypes.array,
  }
  componentDidMount() {
    // console.log(this.props.store.getState())
  }
  render() {
    const {
      questionsUnAnswered, questionsAnswered, authedUser, background,
    } = this.props
    if (this.props.authedUser === null) {
      return <Modal buttonLabel="open" />
    }

    return (
      <div className="Home">
        <Row className="justify-content-md-center">
          <Col className="col-md-auto mb-3" sm="6" xs="12">
            <Card className="mb-3 shadow rounded">
              <CardBody>
                <CardTitle className="mb-0">
                  {authedUser } Answered  <Badge className={`bg-${background}`} color={background}>{ questionsAnswered.length}</Badge> games
                </CardTitle>
              </CardBody>
            </Card>
            {questionsAnswered.map(item => (
              <Card key={item} body className="mb-3">
                <DisplayQuestions
                  idQuestions={item}
                  tag="div"
                />
              </Card>
              ))
            }
          </Col>
          <Col className="col-md-auto mb-3" sm="6" xs="12">
            <Card className="mb-3">
              <CardBody>
                <CardTitle className="mb-0">
                  {authedUser } Unanswered  <Badge color={background}>{ questionsUnAnswered.length}</Badge> games
                </CardTitle>
              </CardBody>
            </Card>
            {questionsUnAnswered.map(item => (
              <Card key={item} body className="mb-3">
                <DisplayQuestions
                  idQuestions={item}
                  tag="div"
                />
              </Card>
              ))
            }
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps({
  authedUser, users, questions, template, state,
}) {
  // console.log(users, questions)
  let questionsAnswered = Object.values(users)
    .filter(e => e.id === authedUser)
    .map(e => e.answers)
  // console.log(questionsAnswered)
  let qa = { ...questionsAnswered[0] }
  qa = Object.keys(qa)// on recupere les id reponduent dans un tableau
  questionsAnswered = qa
  // console.log(questionsAnswered)

  let questionsUnAnswered = questionsAnswered
  let q = { ...questions }// destructure les questions
  q = Object.keys(q)// ont récupuere toutes les ids et ont les mets dans un tableau
  // console.log(q, qa)
  const qr = pullAll(q, qa) // Lodash method, compare and  les reponses  avec les questionsAnswered
  questionsUnAnswered = qr
  // console.log(questionsUnAnswered)
  return {
    authedUser,
    questionsAnswered,
    questionsUnAnswered,
    color: template.color,
    background: template.background,
  }
}
export default connect(mapStateToProps)(Home)

