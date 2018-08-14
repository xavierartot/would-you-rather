export const RECEIVES_USERS = 'RECEIVE_USERS'
export function receiveUsers(users) {
  return {
    type: RECEIVES_USERS,
    users,
  }
}

