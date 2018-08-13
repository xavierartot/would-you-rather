import SETAUTHED_USER from '../actions/users'

function authedUsers(state = {}, action) {
  switch (action.type) {
    case SETAUTHED_USER:
      return {
        ...state,
      }
      break
    default: return state
  }
}
