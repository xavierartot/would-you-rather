export const UN_AUTHED_USER = 'UN_AUTHED_USER'

export function unAuthedUser(id) {
  return {
    type: UN_AUTHED_USER,
    id,
  }
}
