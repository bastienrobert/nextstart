const path = require('path')

const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')

module.exports = withCss(
  withSass({
    webpack(config, options) {
      config.resolve.alias['components'] = path.join(__dirname, 'components')
      config.resolve.alias['data'] = path.join(__dirname, 'data')
      config.resolve.alias['utils'] = path.join(__dirname, 'utils')
      return config
    },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]'
    },
    sassLoaderOptions: {
      includePaths: ['./'],
      data: '@import "utils/config.scss";'
    }
  })
)
