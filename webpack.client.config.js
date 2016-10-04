const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_PATH': `'${process.env.BASE_PATH || ''}'`,
      'process.env.SUPPORTER_URL': `'${process.env.SUPPORTER_URL || ''}'`
    })
  ]
}
