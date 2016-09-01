const webpack = require('webpack')
const defaultConfig = require('boiler-room-builder/webpack.client.config')

const { assign } = Object

module.exports = assign({}, defaultConfig, {
  plugins: (defaultConfig.plugins || []).concat(
    new webpack.DefinePlugin({
      'process.env.BASE_PATH': `'${process.env.BASE_PATH || ''}'`,
      'process.env.SUPPORTER_URL': `'${process.env.SUPPORTER_URL || ''}'`
    })
  )
})
