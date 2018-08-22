export const RECEIVES_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_POLL = 'ADD_ANSWER_POLL'

export function receiveUsers(users) {
  return {
    type: RECEIVES_USERS,
    users,
  }
}

export function addAnswerPoll(authedUser, answer, idQuestion) {
  return {
    type: ADD_ANSWER_POLL,
    authedUser,
    answer,
    idQuestion,
  }
}

