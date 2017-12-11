import React from 'react'
import { Container, Heading, Flex, Box, Subhead, Text } from 'rebass'
import theme, { colors, mx } from '../theme'

const Base = Container.extend.attrs({
  my: [4, 5],
  color: 'red'
})`text-align: center;`

export default () => (
  <Base>
    <Heading>404!</Heading>
  </Base>
)
