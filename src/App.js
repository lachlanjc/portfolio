import React, { Fragment } from 'react'
import { StaticRouter, BrowserRouter, Route, Link } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { Provider } from 'rebass'
import theme from './theme'
import Header from './components/Header'
import About from './containers/About'
import Work from './containers/Work'

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

// universal router component
const Router = typeof document !== 'undefined' ? BrowserRouter : StaticRouter

const App = props => (
  <Router basename={props.basename} location={props.pathname}>
    <Fragment>
      <title>Portfolio – @lachlanjc</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="//brick.a.ssl.fastly.net/Source+Code+Pro:400,700"
      />
      <Provider theme={theme}>
        <Header />
        <Route exact path="/" render={() => <About {...props} />} />
        <Route path="/work" render={() => <Work {...props} />} />
      </Provider>
    </Fragment>
  </Router>
)

export default App
