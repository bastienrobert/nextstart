import { STORE_CLIENT } from 'utils/config'
import 'isomorphic-unfetch'

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
      await STORE_CLIENT.product.fetchAll().then(products => {
        dispatch.products.receiveProducts(products)
      })
    }
  })
}

export default products
