import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import Modal from '../containers/Modal'
// import has from 'lodash/has'
// import flattenDepth from 'lodash/flattenDepth'
// import pick from 'lodash/pick'
// import isArray from 'lodash/isArray'
// import get from 'lodash/get'
// import filter from 'lodash/filter'
import pullAll from 'lodash/pullAll'

class Home extends Component {
  render() {
    const { IdsQuestions } = this.props
    // console.log(IdsQuestions)
    if (this.props.authedUser === null) {
      return <Modal buttonLabel="open" />
    }
    return (
      <div className="Home">
        <h1>Polls</h1>
        <Poll IdsQuestions={IdsQuestions} />
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
  const qr = pullAll(q, qa) // Lodash method, compare and  les reponses  avec les questionsAnswered
  questionsUnAnswered = qr
  // console.log(questionsUnAnswered)

  return {
    authedUser,
    IdsQuestions: [questionsAnswered, questionsUnAnswered], // // concat in an Array the answers
  }
}
export default connect(mapStateToProps)(Home)
