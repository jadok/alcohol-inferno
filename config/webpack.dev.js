const config = require('./webpack.config')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(config, {
  devServer: {
    historyApiFallback: true,
    port: 8099,
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'process.env.BABEL_ENV': '"development"'
    })
  ]
})
