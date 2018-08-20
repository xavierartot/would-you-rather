import random from 'lodash/random'

export default function templateBootstrap(darked = '') {
  const arrayColors = [
    'dark',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'gray',
  ]
  let randColor

  for (let i = 0, len = arrayColors.length; i < len; i++) {
    if (darked === 'darked') {
      return randColor = arrayColors[0]
    }
    return randColor = arrayColors[random(0, arrayColors.length)]
  }

  return randColor
}
