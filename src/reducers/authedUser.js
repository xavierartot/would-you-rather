import { SET_AUTHED_USER } from '../actions/authedUser'
import { UN_AUTHED_USER } from '../actions/unAuthedUser'


export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id
    case UN_AUTHED_USER:
      return action.id = null
    default:
      return state
  }
}
