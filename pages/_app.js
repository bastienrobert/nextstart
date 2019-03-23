import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'

import { Provider } from 'react-redux'
import store from 'store'

import Header from 'components/shared/Header'
import PageLoader from 'components/shared/PageLoader'

import 'reset-css'
import './styles.scss'

export default class NextStart extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    }
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', () => store.dispatch.loader.start())
    Router.events.on('routeChangeComplete', () => store.dispatch.loader.stop())
    Router.events.on('routeChangeError', () => store.dispatch.loader.stop())
  }

  render() {
    const { Component, pageProps } = this.props
    const layoutShouldBeRendered = this.props.router.route !== '/admin'

    return (
      <Container>
        {layoutShouldBeRendered && <Header />}
        <Provider store={store}>
          <PageLoader />
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}
