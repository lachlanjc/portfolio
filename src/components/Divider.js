import React from 'react'
import { Box } from 'rebass'

const Divider = Box.extend.attrs({
  bg: 'base',
  w: 128,
  py: 1,
  my: 4,
  mx: 'auto'
})`border-radius: 1rem;`

export default Divider

