const config = require('./webpack.config')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = Object.assign({}, config, {
  performance: {
    hints: false
  },
  devtool: 'hidden-source-map',
  plugins: [
    new CleanWebpackPlugin(
      ['dist'], {
        verbose: true
      }
    ),

    // By default, webpack does `n=>n` compilation with entry files. This concatenates
    // them into a single chunk.
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
});
