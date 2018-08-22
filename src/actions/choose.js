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
    // optimistic update
    dispatch(choose(id, userId, value))
    // save in DB
    return _saveQuestionAnswer({
      authedUser: userId,
      id,
      answer: value,
    })
      .catch((e) => {
        console.warn('Error toggle tweet', e)
        // dispatch to back in time
        // dispatch(toggleTweet(info)) // put back one more time to reset what it was initially
        alert('The was an error liking the tweet. Try again')
      })
  }
}
