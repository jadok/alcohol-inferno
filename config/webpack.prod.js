const config = require('./webpack.config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(config, {
  devtool: 'hidden-source-map',
  plugins: [
    new CleanWebpackPlugin(
      ['dist'], {
        verbose: true
      }
    ),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.BABEL_ENV': '"production"'
    })
  ]
});
