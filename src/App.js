import React from 'react'
import { Router } from 'react-static'
import { injectGlobal } from 'styled-components'
import Routes from 'react-static-routes'
import { Provider } from 'rebass'
import theme from './theme'
import Header from './components/Header'

injectGlobal`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    color: ${theme.colors.black};
    line-height: 1.625;
  }
  a { text-decoration: none; }
  @font-face {
    font-family: Averta;
    font-style: normal;
    font-weight: normal;
    src: url(https://hackclub.com/fonts/averta-regular.woff2) format('woff2'), url(https://hackclub.com/fonts/averta-regular.woff) format('woff');
    unicode-range: U + 0000 - F8FE, U + F900-FFFF;
  }
  @font-face {
    font-family: Averta;
    font-style: normal;
    font-weight: bold;
    src: url(https://hackclub.com/fonts/averta-bold.woff2) format('woff2'), url(https://hackclub.com/fonts/averta-bold.woff) format('woff');
    unicode-range: U + 0000 - F8FE, U + F900-FFFF;
  }
`

export default () => (
  <Router>
    <Provider theme={theme}>
      <Header />
      <Routes />
    </Provider>
  </Router>
)
