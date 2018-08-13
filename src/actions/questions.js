export const RECEIVES_QUESTIONS = 'RECEIVES_QUESTIONS'

export function receiveQuestions(questions) {
  return {
    type: RECEIVES_QUESTIONS,
    questions,
  }
}
