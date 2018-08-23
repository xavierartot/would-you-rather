import { _saveQuestionAnswer } from '../utils/_DATA'
import { addAnswerPoll } from '../actions/users'

export const CHOOSE_QUESTION = 'CHOOSE_QUESTION '

export function chooseQuestion(id, userId, value) {
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
    dispatch(chooseQuestion(id, userId, value))// question reducer
    dispatch(addAnswerPoll(id, userId, value))// users reducer

    // save in DB after UI
    return _saveQuestionAnswer({
      userId,
      id,
      value,
    })
      .catch((e) => {
        console.warn('Error toggle question', e)
        alert('The was an error liking the question Try again')
      })
  }
}
