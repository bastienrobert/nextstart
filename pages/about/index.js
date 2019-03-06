import React, { Component } from 'react'
import Head from 'next/head'

import Typo from 'components/typo'

import css from './styles.scss'

export default class About extends Component {
  render() {
    return (
      <div className={css.About}>
        <Head>
          <title>About</title>
        </Head>

        <Typo title>
          <h1>About</h1>
        </Typo>
        <div className={css.wrapper}>
          <div className={css.content}>
            <section>
              <Typo subtitle>
                <h2>Hello, it's a test</h2>
              </Typo>
              <Typo text>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas vitae aspernatur dolorem natus.
                </p>
                <p>
                  Tenetur natus iure sequi soluta, consequatur officiis mollitia
                  corrupti, excepturi possimus magnam eum! Aliquid doloremque
                  voluptas amet.
                </p>
              </Typo>
            </section>
            <section>
              <Typo subtitle>
                <h2>Pouet</h2>
              </Typo>
              <Typo text>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas vitae aspernatur dolorem natus.
                </p>
              </Typo>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
