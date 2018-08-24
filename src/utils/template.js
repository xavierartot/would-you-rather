import random from 'lodash/random'

export default function templateBootstrap(darked = '') {
  const arrayColors = {
    0: { background: 'dark', color: 'text-white' },
    1: { background: 'primary', color: 'text-white' },
    2: { background: 'secondary', color: 'text-white' },
    3: { background: 'success', color: 'text-white' },
    4: { background: 'danger', color: 'text-white' },
    5: { background: 'warning', color: 'text-dark' },
    6: { background: 'info', color: 'text-white' },
  }
  let objColor = Object.values(arrayColors),
    randColor
  // randColor = objColor.map(item => randColor = arrayColors[random(0, arrayColors.length)])

  for (let i = 0, len = objColor.length; i < len; i++) {
    return randColor = objColor[random(0, objColor.length)]
  }
  console.log(randColor)

  return [randColor.background, randColor.color]
}
