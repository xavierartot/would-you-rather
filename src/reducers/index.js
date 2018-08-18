import { combineReducers } from 'redux'
import questions from './questions'
import { users } from './users'
import authedUser from './authedUser'
import template from './template'

export default combineReducers({
  users,
  questions,
  authedUser,
  template,
  // loadingBar: loadingBarReducer, // react-redux-loading
})
