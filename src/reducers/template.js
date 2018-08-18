import { CHANGE_TEMPLATE } from '../actions/template'

export default function template(state = {}, action) {
  switch (action.type) {
    case CHANGE_TEMPLATE:
      return {
        ...state,
        color: action.color,
      }
    default: return state
  }
}
