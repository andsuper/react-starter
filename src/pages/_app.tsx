import React from 'react'
import App from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

import Layout from '../components/Layout'

class SuperApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <GlobalStyles />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    )
  }
}

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  *:focus {
    outline: none;
  }

  html, body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default SuperApp
