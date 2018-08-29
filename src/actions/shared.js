// import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveQuestions } from '../actions/questions'
import { receiveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import { addQuestion } from '../actions/users'
import { addPoll } from '../actions/addPoll'
import { _saveQuestion } from '../utils/_DATA'


import { getInitialData } from '../utils/_DATA'

// Retrieve initial data from database

export function handleInitialData() { // middleware thunk
  return (dispatch, getState) => { // thunk pattern with redux-thunk
    getInitialData() // return a promise
      .then(({ users, questions }) => {
        // dispatch(showLoading()) // show the loading bar
        // promise which will pass to us an object with users and questions properties
        // let's add users, questions to the redux store
        dispatch(receiveUsers(users))
        dispatch(setAuthedUser(null)) // null by default
        dispatch(receiveQuestions(questions))
        // dispatch(hideLoading()) // hide the loading bar
      })
  }
}

export function handleAddPoll(authedUser, optionOne, optionTwo) {
  const question = {
    author: authedUser,
    optionOne,
    optionTwo,
  }
  return (dispatch, getState) => { // thunk pattern with redux-thunk
    _saveQuestion(question)
      .then((questions, users) => {
        // console.log(questions)
        dispatch(addPoll(authedUser, optionOne, optionTwo, questions.id))// question reducer
        dispatch(addQuestion(authedUser, questions.id))// users reducer
      })
  }
}
