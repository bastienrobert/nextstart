require('isomorphic-unfetch')
const Client = require('shopify-buy')

const STORE_ENDPOINT = 'bastienrobert.myshopify.com'
const STORE_API_KEY = '44336ee4fd62f3b48691c95993a14d1b'

const STORE_CLIENT = Client.buildClient({
  domain: STORE_ENDPOINT,
  storefrontAccessToken: STORE_API_KEY
})

const fetchProducts = async () => {
  return await STORE_CLIENT.product.fetchAll()
}

module.exports = async () => {
  const products = await fetchProducts()

  const static = {
    '/': { page: '/' },
    '/about': { page: '/about' },
    '/products': { page: '/products' },
    '/admin': { page: '/admin' }
  }

  const dynamic = products
    .map(product => [
      `/products/${product.handle}`,
      {
        page: '/product',
        query: { slug: product.handle }
      }
    ])
    .reduce((obj, [k, v]) => ({ ...obj, [k]: v }), {})

  return Object.assign({}, static, dynamic)
}
