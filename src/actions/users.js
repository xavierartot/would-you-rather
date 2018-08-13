export const SETAUTHED_USER = 'SETAUTHED_USER'
export function setAuthedUser(id) {
  return {
    type: SETAUTHED_USER,
    id,
  }
}

