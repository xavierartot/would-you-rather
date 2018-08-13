import { showLoading, hideLoading } from 'react-redux-loading'
// import { receiveQuestions } from '../actions/question'
import { setAuthedUser } from '../actions/users'

import { _getUsers } from '../utils/_DATA'

// authentification is hard coded
// const AUTHED_ID = 'xavier'

export function handleInitialData() { // middleware thunk
  return (dispatch, getState) => { // thunk pattern with redux-thunk
    console.log(getState())
    _getUsers() // return a promise
      .then(({ users }) => {
        dispatch(showLoading()) // show the loading bar
        // promise which will pass to us an object with users and tweets properties
        // let's add users, tweets to the redux store
        // dispatch(receiveQuestions(questions))
        // dispatch(receiveUsers(users))
        // dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading()) // hide the loading bar
      })
  }
}
