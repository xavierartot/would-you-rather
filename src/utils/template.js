import random from 'lodash/random'

export default function templateBootstrap() {
  const arrayColors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
    'gray',
  ]
  const randColor = arrayColors[random(0, arrayColors.length)]
  return randColor
}
