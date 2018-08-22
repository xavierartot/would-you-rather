import { _saveQuestionAnswer } from '../utils/_DATA'

export const CHOOSE_QUESTION = 'CHOOSE_QUESTION '

export function choose(id, userId, value) {
  return {
    type: CHOOSE_QUESTION,
    id,
    userId,
    value,
  }
}
export function handleChooseQuestion(id, userId, value) {
  return (dispatch, getState) => { // thunk pattern with redux-thunk
    // optimistic update, UI first
    dispatch(choose(id, userId, value))

    // save in DB after UI
    return _saveQuestionAnswer({
      authedUser: userId,
      id,
      answer: value,
    })
      .catch((e) => {
        console.warn('Error toggle tweet', e)
        alert('The was an error liking the question Try again')
      })
  }
}
