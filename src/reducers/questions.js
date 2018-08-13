import { RECEIVES_QUESTIONS, receiveQuestions } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVES_QUESTIONS:
      return {
        ...state,
        ...action.users,
      }
    default: return state
  }
}
