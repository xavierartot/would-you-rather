import random from 'lodash/random'
// import flatten from 'lodash/flatten'

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
  let randColor = Object.values(arrayColors)
  const randNumber = random(0, randColor.length - 1)
  randColor = randColor[randNumber]
  return randColor
}
