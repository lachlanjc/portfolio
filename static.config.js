import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import theme from './src/theme'

export default {
  getSiteProps: () => ({
    title: 'Portfolio'
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/About'
    },
    {
      path: '/work',
      component: 'src/containers/Work'
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
          <head>
            <title>Portfolio – @lachlanjc</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {styleTags}
          </head>
          <Body>{newChildren}</Body>
        </Html>
      )
    }
  }
}
