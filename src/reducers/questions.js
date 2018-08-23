import { RECEIVES_QUESTIONS } from '../actions/questions'
import { CHOOSE_QUESTION } from '../actions/choose'
import { ADD_POLL } from '../actions/addPoll'

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
      // console.log(updateState)
      state = updateState
      return state
    case ADD_POLL:
      const {
        author, textOptionOne, textOptionTwo, idGenerate,
      } = action
      return {
        ...state,
        [idGenerate]: {
          id: idGenerate,
          author,
          timestamp: Date.now(),
          optionOne: {
            votes: [],
            text: textOptionOne,
          },
          optionTwo: {
            votes: [],
            text: textOptionTwo,
          },
        },
      }
      // id: 'xj352vofupe1dqz9emx13r',
      // author: 'johndoe',
      // timestamp: 1493579767190,
      // optionOne: {
      // votes: ['johndoe'],
      // text: 'write JavaScript',
      // },
      // optionTwo: {
      // votes: ['tylermcginnis'],
      // text: 'write Swift',
      // },
      // },
    default: return state
  }
}
