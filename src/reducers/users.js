import { RECEIVES_USERS } from '../actions/users'
import { ADD_ANSWER_POLL } from '../actions/users'
import { ADD_QUESTION } from '../actions/users'

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVES_USERS:
      return {
        ...state,
        ...action.users, // merge users
      }
    case ADD_ANSWER_POLL:
      const { authedUser, answer, idQuestion } = action
      console.log(idQuestion, authedUser, answer, state[authedUser], state)
      const user = state[authedUser]
      return {
        ...state,
        [authedUser]: {
          ...user,
          answers: {
            ...user.answers,
            [idQuestion]: answer, // add the result here
          },
        },
      }
    case ADD_QUESTION:
      const idGenerated = action.idGenerated,
        aqId = state[action.authedUser]
      console.log(action.authedUser, idGenerated, state[action.authedUser])
      console.log(...state[action.authedUser])
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: [...aqId.questions, idGenerated],
        },
      }
    default:
      return state
  }
}
