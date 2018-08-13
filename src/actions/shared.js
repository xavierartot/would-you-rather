import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveQuestions } from '../actions/questions'
import { receiveUser } from '../actions/users'

import { _getUsers, _getQuestions } from '../utils/_DATA'


export function handleInitialData() { // middleware thunk
  return (dispatch, getState) => { // thunk pattern with redux-thunk
    _getUsers() // return a promise
      .then((users) => {
        dispatch(showLoading()) // show the loading bar
        // let's add users, tweets to the redux store
        dispatch(receiveUser(users))
      })
    _getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading()) // hide the loading bar
      })
  }
}
