import React, { Component } from 'react'
import Head from 'next/head'
import store from 'store'

import Typo from 'components/typo'

import css from './styles.scss'

export default class Products extends Component {
  static async getInitialProps({ req }) {
    const { dispatch, getState } = store
    await dispatch.products.fetchProducts()

    return await getState()
  }

  render() {
    const { products } = this.props

    return (
      <div className={css.Products}>
        <Head>
          <title>Products</title>
        </Head>

        <Typo title>
          <h1>Products</h1>
        </Typo>
        <div className={css.wrapper}>
          <ul className={css.list}>
            {products.map((product, i) => (
              <Typo text key={`product-${i}`}>
                <li>{product.title}</li>
              </Typo>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
