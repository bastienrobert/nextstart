import Client from 'shopify-buy'

export const STORE_ENDPOINT = 'bastienrobert.myshopify.com'
export const STORE_API_KEY = '44336ee4fd62f3b48691c95993a14d1b'

export const NETLIFY_IDENTITY_API =
  'https://nextstart.netlify.com/.netlify/identity'

export const STORE_CLIENT = Client.buildClient({
  domain: STORE_ENDPOINT,
  storefrontAccessToken: STORE_API_KEY
})
