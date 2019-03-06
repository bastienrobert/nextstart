import React, { Component } from 'react'
import Head from 'next/head'

import Typo from 'components/typo'

import css from './styles.scss'

export default class Home extends Component {
  render() {
    return (
      <div className={css.Home}>
        <Head>
          <title>Home</title>
        </Head>

        <Typo title>
          <h1>Home</h1>
        </Typo>
        <div className={css.wrapper}>
          <Typo text>
            <p>Hello</p>
          </Typo>
        </div>
      </div>
    )
  }
}
