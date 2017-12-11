import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getSiteProps: () => ({
    title: 'Portfolio'
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home'
    },
    {
      path: '/about',
      component: 'src/containers/About'
    },
    {
      is404: true,
      component: 'src/containers/404'
    }
  ],
  Html: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children } = this.props

      const sheet = new ServerStyleSheet()
      const newChildren = sheet.collectStyles(children)
      const styleTags = sheet.getStyleElement()

      return (
        <Html>
          <Head>
            <title>Portfolio – @lachlanjc</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {styleTags}
          </Head>
          <Body>{newChildren}</Body>
        </Html>
      )
    }
  }
}
