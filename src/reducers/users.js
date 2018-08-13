import { RECEIVEUSERS } from '../actions/users'

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVEUSERS:
      return {
        ...state,
        ...action.users, // merge users
      }
    default: return state
  }
}

