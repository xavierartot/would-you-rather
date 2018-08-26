import { CHANGE_TEMPLATE } from '../actions/template'

export default function template(state = {}, action) {
  switch (action.type) {
    case CHANGE_TEMPLATE:
      const { color } = action
      //console.log(action)
      //console.log(color)
      //console.log(color.color)
      //console.log(color.background)
      return {
        ...state,
        color: color.color,
        background: color.background,
      }
    default: return state
  }
}
