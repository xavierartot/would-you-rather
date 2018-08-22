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
      const q = question[value].votes.concat([userId])
      // console.log(q)
      const updateState = {
        ...state,
        [id]: {
          ...question, // spread l'object question
          [value]: {// update the value
            text: state[id][value].text, // add the text again
            votes: q, // add the new array
          },
        },
      }
      console.log(updateState)
      state = updateState
      return state
    default: return state
  }
}
