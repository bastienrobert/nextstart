require('isomorphic-unfetch')
const Client = require('shopify-buy')

const STORE_ENDPOINT = 'bastienrobert-dev.myshopify.com'
const STORE_API_KEY = '512f355712b64edd1c738fee73af1214'

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
