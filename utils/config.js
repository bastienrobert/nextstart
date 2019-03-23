import Client from 'shopify-buy'

export const STORE_ENDPOINT = 'bastienrobert-dev.myshopify.com'
export const STORE_API_KEY = '512f355712b64edd1c738fee73af1214'

export const NETLIFY_IDENTITY_API =
  'https://nextstart.netlify.com/.netlify/identity'

export const STORE_CLIENT = Client.buildClient({
  domain: STORE_ENDPOINT,
  storefrontAccessToken: STORE_API_KEY
})
