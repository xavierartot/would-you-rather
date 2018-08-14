export const RECEIVEUSERS = 'RECEIVEUSERS'
export function receiveUsers(users) {
  return {
    type: RECEIVEUSERS,
    users,
  }
}

