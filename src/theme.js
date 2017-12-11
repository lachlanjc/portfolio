import palx from 'palx'

const blue = '#2962ff'
export const colors = {
  base: blue,
  accent: '#aa00ff',
  red: '#ff1744',
  blue,

  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  // smoke3: '#c0ccda',
  // smoke2: '#d3dce6',
  smoke: '#e0e6ed',
  // snow3: '#e5e9f2',
  // snow2: '#eff2f7',
  snow: '#f9fafc',
  white: '#ffffff'
}

export const mp = [32, 48, 64, 80]
export const mx = mp.map(w => `@media screen and (min-width:${w}em)`)
export const mm = mp.map(w => `@media screen and (max-width:${w}em)`)

const theme = {
  colors,
  radius: 4,
  weights: [400, 700],
  font: 'Averta, Roboto, sans-serif',
  mono: 'SFMono-Regular, Courier New, monospace'
}

export default theme
