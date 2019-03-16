const path = require('path')

const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')

const exportPathMap = require('./bin/exportPathMap')

module.exports = withCss(
  withSass({
    webpack(config, options) {
      config.resolve.alias['components'] = path.join(__dirname, 'components')
      config.resolve.alias['data'] = path.join(__dirname, 'data')
      config.resolve.alias['store'] = path.join(__dirname, 'store')
      config.resolve.alias['utils'] = path.join(__dirname, 'utils')
      return config
    },
    publicRuntimeConfig: {
      staticFolder: '/'
    },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]'
    },
    sassLoaderOptions: {
      includePaths: ['./'],
      data: '@import "utils/config.scss";'
    },
    exportPathMap
  })
)
