import React, { Fragment } from 'react'
import { Container, Heading, Flex, Box, Image, Subhead, Text } from 'rebass'
import theme, { colors, mx } from '../theme'
import data from '../../data.json'

const Title = Subhead.extend.attrs({
  is: 'h2',
  color: 'slate',
  caps: true,
  f: [4, 5]
})`
  text-align: center;
`

const Desc = Text.extend.attrs({ mt: 2, f: 3 })`
  text-align: center;
`

const Gallery = Box.extend.attrs({ my: 3 })`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`

const Item = Box.extend.attrs({})``
const ItemImage = Image.extend.attrs({})``
const Caption = Text.extend.attrs({})``

export default () => (
  <Container>
    {data.map((cat, i) => (
      <Box is="section" my={4}>
        <Title children={cat.name} />
        <Desc children={cat.desc} />
        <Gallery>
          {cat.work.map((work, i) => (
            <Item>
              <ItemImage src={work.img} />
              <Caption children={work.caption} />
            </Item>
          ))}
        </Gallery>
      </Box>
    ))}
  </Container>
)
