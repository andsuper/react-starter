import React from 'react'
import App from 'next/app'
import { normalize } from 'polished'
import { createGlobalStyle } from 'styled-components'

import { Layout } from '../components/Layout'

class SuperApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <GlobalStyles />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
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
