import Client from 'shopify-buy'
import 'isomorphic-unfetch'
import { STORE_ENDPOINT, STORE_API_KEY } from 'utils/config'

const client = Client.buildClient({
  domain: STORE_ENDPOINT,
  storefrontAccessToken: STORE_API_KEY
})

const products = {
  state: [],
  reducers: {
    receiveProducts(state, payload) {
      return payload
    }
  },
  effects: dispatch => ({
    async fetchProducts(payload, rootState) {
      if (rootState.products.length > 0) return
      await client.product.fetchAll().then(products => {
        dispatch.products.receiveProducts(products)
      })
    }
  })
}

export default products
