import { RECEIVEUSERS } from '../actions/users'

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVEUSERS:
      return {
        ...state,
        ...action.users, // merge users
      }
    default: return state
  }
}

// const RECEIVES_QUESTIONS = 'RECEIVES_QUESTIONS'

// export function receiveQuestions(users) {
// return {
// type: RECEIVES_QUESTIONS,
// users,
// }
// }
// export default function questions(state = {}, action) {
// switch (action.type) {
// case RECEIVES_QUESTIONS:
// return {
// ...state,
// ...action.users,
// }
// default: return state
// }
// }
