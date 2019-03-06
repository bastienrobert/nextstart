import React from 'react'
import App, { Container } from 'next/app'

import { Provider } from 'react-redux'
import store from 'data/store'

import Header from 'components/shared/Header'

import 'reset-css'
import './styles.scss'

export default class RudiGernreichby extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Header />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}
