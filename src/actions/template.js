export const CHANGE_TEMPLATE = 'CHANGE_TEMPLATE'

export function changeTemplate(color, textColor) {
  return {
    type: CHANGE_TEMPLATE,
    color,
    textColor,
  }
}
export function handleTemplate(color) {
  return (dispatch, getState) => {
    dispatch(changeTemplate(color))
  }
}
