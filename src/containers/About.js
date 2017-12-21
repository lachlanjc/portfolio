import React, { Fragment } from 'react'
import {
  Container,
  Heading,
  Flex,
  Box,
  Image,
  Subhead,
  Text,
  ButtonOutline
} from 'rebass'
import { Link } from 'react-router-dom'
import theme, { colors, mx } from '../theme'
import Divider from '../components/Divider'

const Masthead = Flex.extend.attrs({
  direction: ['column', 'row'],
  px: 3,
  mx: 'auto'
})`
  max-width: 72rem;
  text-align: center;
  ${mx[0]} {
    min-height: 80vh;
    text-align: left;
    > div { max-width: 50%; }
  }
`
const Name = Heading.extend.attrs({ f: 6, mt: 0, mb: 3 })`
  line-height: 1;
`
const Bio = Text.extend.attrs({ f: 3, my: 2 })`
  font-family: ${theme.mono};
  font-weight: 400;
  line-height: 1.625;
`

const PortraitBox = props => (
  <Flex
    column
    justify="center"
    align={['center', 'flex-end']}
    flex="1 1 auto"
    p={[3, 4]}
    pr={[null, 4]}
    {...props}
  />
)
const Portrait = Image.extend`
  border-radius: 12px;
  max-height: 40vh;
  max-width: 50vw;
  ${mx[0]} {
    border-radius: 24px;
    max-height: 64vh;
  }
`

const Go = ButtonOutline.extend.attrs({
  color: 'blue',
  mt: 3,
  f: 3,
  py: 3,
  px: 4
})`
  display: inline-block;
  width: intrinsic;
`

const NameBox = Container.extend.attrs({
  py: 2,
  px: [2, 4]
})`
  p {
    max-width: 32rem;
  }
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Article = Container.extend.attrs({ maxWidth: 36 * 16 })`
  p {
    font-family: ${theme.mono};
    line-height: 1.625;
  }

  strong {
    font-weight: 600;
    color: ${colors.accent};
  }
`

const Quote = Text.extend.attrs({ color: 'accent', p: 3, f: 4 })`
  font-family: ${theme.mono};
  font-weight: 600;
  font-style: italic;
  line-height: 1.375;
  cite {
    color: ${colors.slate};
    display: block;
    font-size: .875rem;
    font-style: normal;
    margin-top: .5rem;
  }
`

export default () => (
  <Fragment>
    <Masthead>
      <PortraitBox>
        <Portrait src="https://cdn.glitch.com/3ddbd40d-f89f-488c-a0eb-0dc4aa1ebc80%2Fstatic%2Fportrait.jpg?1500175195551" />
      </PortraitBox>
      <NameBox>
        <Name>Hey, I’m Lachlan.</Name>
        <Bio>
          I’m a high schooler interested in visual and industrial design with a
          penchant for typography.
        </Bio>
        <Go is={Link} to="/work">
          View work
        </Go>
      </NameBox>
    </Masthead>
    <Divider />
    <Article>
      <Quote>
        The only secret of magic is that I'm willing to work harder on it than
        you think it’s worth.
        <cite>—Penn Jillette</cite>
      </Quote>
    </Article>
    <Divider />
    <Article my={[4, 5]}>
      <Heading>Artist Statement</Heading>
      <p>
        We, the always-connected, are drowning in information. Headlines,
        articles, messages, email, ads, videos saturate us with more information
        than we could consume in a lifetime. Meanwhile much of the information
        most critical for people to help shape our future remains inaccessible.
        Multiple modern crises stem from this dichotomy—increased anxiety, sleep
        deprivation, and “fake news”—and it seems the only way to solve them is
        through more carefully selected, better presented information.
      </p>

      <Quote>Good design is in short supply.</Quote>

      <p>
        Making something I merely find beautiful is not enough. With my 20/20
        vision and high-resolution displays, I could easily forget the needs and
        abilities of the people who see and use my work. Part of my
        responsibility as a designer is to make products and services that
        respect all users, and thus to push the entire industry to do the same.
        Digital interfaces need to be clear and inclusive, colors need to meet
        international color contrast standards, and text sizes should
        dynamically adapt to users’ abilities. Magnifying glasses and profound
        frustration are not part of good design.
      </p>

      <p>
        I design my products to embody these ideas.{' '}
        <strong>Fossil Funded</strong> is built on a detailed map and database,
        but few would search for their Congressional district on the map or
        study a 5,000-cell table with energy left over for a phone call to their
        Representative’s office. Information that is hidden will never have a
        meaningful impact. My app makes complex, inaccessible data not only
        readily available and easy to understand; it makes critical information
        actionable. <strong>Blink</strong> unlocks communication for those for
        whom the entire outside world is inaccessible, giving significantly
        disabled people a flexible way to communicate.
      </p>
    </Article>
  </Fragment>
)
