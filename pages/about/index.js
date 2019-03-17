import React, { Component } from 'react'
import Head from 'next/head'
import data from 'data/pages/about.json'

import Typo from 'components/typo'

import css from './styles.scss'

export default class About extends Component {
  render() {
    return (
      <div className={css.About}>
        <Head>
          <title>{data.title}</title>
        </Head>

        <Typo title>
          <h1>About</h1>
        </Typo>
        <div className={css.wrapper}>
          <div className={css.content}>
            <Typo markdown={data.content} />
          </div>
        </div>
      </div>
    )
  }
}
