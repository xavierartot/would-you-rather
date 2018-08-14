// import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveQuestions } from '../actions/questions'
import { receiveUsers } from '../actions/users'

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
        dispatch(receiveQuestions(questions))
        // dispatch(hideLoading()) // hide the loading bar
      })
  }
}
