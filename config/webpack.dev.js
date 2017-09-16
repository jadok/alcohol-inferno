const config = require('./webpack.config')
const webpack = require('webpack')

module.exports = Object.assign({}, config, {
  devServer: {
    contentBase: 'src/',
    historyApiFallback: true,
    port: 8099
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
