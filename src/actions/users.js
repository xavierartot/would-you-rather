export const RECEIVES_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_POLL = 'ADD_ANSWER_POLL'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveUsers(users) {
  return {
    type: RECEIVES_USERS,
    users,
  }
}

export function addAnswerPoll(idQuestion, authedUser, answer) {
  return {
    type: ADD_ANSWER_POLL,
    idQuestion,
    authedUser,
    answer,
  }
}

export function addQuestion(authedUser, idGenerated) {
  return {
    type: ADD_QUESTION,
    authedUser,
    idGenerated,
  }
}
