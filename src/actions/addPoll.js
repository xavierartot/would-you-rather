export const ADD_POLL = 'ADD_POLL'

export function addPoll(author, textOptionOne, textOptionTwo, idGenerate) {
  return {
    type: ADD_POLL,
    author,
    textOptionOne,
    textOptionTwo,
    idGenerate,
  }
}
