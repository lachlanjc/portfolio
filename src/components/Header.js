import React from 'react'
import { Link } from 'react-static'
import { Heading, Group, Box, Link as A } from 'rebass'
import theme, { colors } from '../theme'

const Header = Box.extend.attrs({ p: [3, 4] })`
  border-bottom: 1px solid ${colors.smoke};
  text-align: center;
`

const Title = Heading.extend.attrs({ f: [4, 5], color: 'blue' })``

const Nav = Group.extend.attrs({ mt: 3 })`
  font-family: ${theme.mono};
`

const NavLink = A.extend.attrs({ px: 3, color: 'slate' })`
  display: inline-block;
  &:hover { color: ${colors.blue}; }
`

export default () => (
  <Header>
    <Title is={Link} to="/">
      Lachlan Campbell
    </Title>
    <Nav>
      <NavLink is={Link} to="/ms" children="Master Studio" />
      <NavLink is={Link} to="/risd" children="RISD" />
      <NavLink is={Link} to="/design" children="Design" />
      <NavLink is={Link} to="/about" children="About" />
    </Nav>
  </Header>
)
