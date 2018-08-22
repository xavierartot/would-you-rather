import { RECEIVES_QUESTIONS } from '../actions/questions'
import { CHOOSE_QUESTION } from '../actions/choose'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVES_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case CHOOSE_QUESTION:
      const {
        id, userId, value,
      } = action
      const question = state[id]
      // console.log(question)
      // console.log(id)
      // console.log(question[value].votes)
      // console.log(action, state)
      // console.log(userId)
      // console.log(state[id][value].votes)
      const q = question[value].votes.concat([userId])
      // console.log(q)
      return {
        ...state,
        [id]: {
          ...question,
          [value]: {
            text: state[id][value].text,
            votes: q,
          },
        },
      }
    default: return state
  }
}
