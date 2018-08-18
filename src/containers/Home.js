import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Poll from './Poll'
import Modal from '../containers/Modal'
import pullAll from 'lodash/pullAll'
import DisplayQuestions from './DisplayQuestions'
import { Card, Row, Col, CardTitle, CardBody, Badge } from 'reactstrap'

import PropTypes from 'prop-types'

class Home extends Component {
  static propTypes = {
    idQuestions: PropTypes.string,
  }
  render() {
    const { questionsUnAnswered, questionsAnswered, authedUser } = this.props
    if (this.props.authedUser === null) {
      return <Modal buttonLabel="open" />
    }

    return (
      <div className="Home">
        <Row className="justify-content-md-center">
          <Col className="col-md-auto mb-3" sm="6" sm="12">
            <Card className="mb-3">
              <CardBody>
                <CardTitle className="mb-0">
                  {authedUser } Answered  <Badge>{ questionsAnswered.length}</Badge> games
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
          <Col className="col-md-auto mb-3" sm="6" sm="12">
            <Card className="mb-3">
              <CardBody>
                <CardTitle className="mb-0">
                  {authedUser } Unanswered  <Badge>{ questionsUnAnswered.length}</Badge> games
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

function mapStateToProps({ authedUser, users, questions }) {
  let questionsAnswered = Object.values(users)
    .filter(e => e.id === authedUser)
    .map(e => e.answers)
  let qa = { ...questionsAnswered[0] }
  qa = Object.keys(qa)// on recupere les id reponduent dans un tableau
  questionsAnswered = qa
  // console.log(questionsAnswered)

  // on filtre les questions qui n'on pas ete repondu par l'auteur
  // on prend les answers par ids et ont les filtres avec les question
  let questionsUnAnswered = questionsAnswered
  // les questions sont filtrés par les réponses réponduent
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
  }
}
export default connect(mapStateToProps)(Home)

