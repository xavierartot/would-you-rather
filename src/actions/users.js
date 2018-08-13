export const RECEIVEUSERS = 'RECEIVEUSERS'
export function receiveUser(users) {
  return {
    type: RECEIVEUSERS,
    users,
  }
}

