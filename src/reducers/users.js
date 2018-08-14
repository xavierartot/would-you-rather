import { RECEIVES_USERS } from '../actions/users'

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVES_USERS:
      return {
        ...state,
        ...action.users, // merge users
      }
    default:
      return state
  }
}
