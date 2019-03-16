import React, { Component } from 'react'
import Head from 'next/head'
import store from 'store'

import Typo from 'components/typo'

import css from './styles.scss'

export default class Products extends Component {
  static async getInitialProps({ req, res }) {
    const {
      params: { slug }
    } = req
    const { dispatch, getState } = store
    // Fetch products
    await dispatch.products.fetchProducts()
    // Get current state
    const state = await getState()
    // Get product by slug
    const product =
      state.products && state.products.find(p => p.handle === slug)
    // Handle 404
    if (!product) {
      const err = new Error()
      err.code = 'ENOENT'
      throw err
    }
    // Return initial props
    return { product }
  }

  render() {
    const { product } = this.props

    return (
      <div className={css.Product}>
        <Head>
          <title>Product - {product.title}</title>
        </Head>

        <Typo title>
          <h1>{product.title}</h1>
        </Typo>
        <div className={css.wrapper}>
          <Typo text>
            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          </Typo>
          {product.images.map(img => (
            <img
              className={css.image}
              alt={img.alt}
              src={img.src}
              key={img.id}
            />
          ))}
        </div>
      </div>
    )
  }
}