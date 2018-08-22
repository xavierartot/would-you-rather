export const CHOOSE_QUESTION = 'CHOOSE_QUESTION '

export function choose(id, userId, value) {
  return {
    type: CHOOSE_QUESTION,
    id,
    userId,
    value,
  }
}
