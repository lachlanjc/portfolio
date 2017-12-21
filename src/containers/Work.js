import React, { Fragment } from 'react'
import {
  Container,
  Avatar,
  Heading,
  Flex,
  Box,
  Image,
  Subhead,
  Text
} from 'rebass'
import { Link } from 'react-router-dom'
import theme, { colors, mx } from '../theme'
import data from '../../data.json'
import Divider from '../components/Divider'

const Header = Flex.extend.attrs({
  align: 'center',
  justify: 'center',
  mx: 'auto',
  my: 4
})`
  max-width: 24rem;
  text-align: left;
  img { flex-shrink: none; }
`

const Question = Text.extend.attrs({ f: 3 })`
  color: ${colors.accent};
  font-family: ${theme.mono};
  font-style: italic;
  font-weight: 600;
  line-height: 1.25;
  text-transform: uppercase;
`

const Title = Heading.extend.attrs({
  color: 'slate',
  f: [4, 5],
  mt: 4
})`
  text-transform: uppercase;
`

const Desc = Text.extend.attrs({ f: 3, mt: 2, mb: 4, mx: 'auto' })`
  max-width: 32rem;
`

const Gallery = Box.extend.attrs({ my: 3 })`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-auto-rows: minmax(16rem, auto);
  grid-auto-flow: dense;
  grid-gap: 1rem;
  justify-content: center;
`

const Item = Box.extend`
  &[cols='2'] {
    grid-column: span 2;
  }
  &[cols='3'] {
    grid-column: span 3;
  }
  &[rows='2'] {
    grid-row: span 2;
  }
  &[rows='2'] {
    grid-row: span 2;
  }
`
const ItemImage = Image.extend.attrs({})``
const Caption = Text.extend.attrs({
  color: 'slate',
  mt: 1
})`
  line-height: 1.375;
`

export default () => (
  <Fragment>
    <style children={`body{background-color:${colors.snow};}`} />
    <Header is={Link} to="/">
      <Avatar
        size={72}
        mr={3}
        src="https://lachlanjc.me/static/portrait-square.jpg"
      />
      <Box>
        <Question>What is good design in an overwhelmed world?</Question>
        <Text color="grey">More about me →</Text>
      </Box>
    </Header>
    <Container style={{ textAlign: 'center' }}>
      {data.map((cat, i) => (
        <Box is="section" my={4}>
          <Divider />
          <Title children={cat.name} />
          <Desc children={cat.desc} />
          <Gallery>
            {cat.work.map(({ img, caption, ...props }, ii) => (
              <Item
                is="a"
                href={img}
                target="_blank"
                {...props}
                key={`work-${i}-${ii}`}
              >
                <ItemImage src={img} />
                <Caption children={caption} />
              </Item>
            ))}
          </Gallery>
        </Box>
      ))}
    </Container>
  </Fragment>
)
