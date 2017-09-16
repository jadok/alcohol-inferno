const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
});

module.exports = {
  entry: './src/index.tsx', // Point to main file
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.scss', '.js', '.jsx']
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: [
          'eslint-loader', 'tslint-loader'
        ]
      },
      {
        test: /\.tsx?$/, // All ts and tsx files will be process by
        loaders: ['babel-loader', 'ts-loader'], // first babel-loader, then ts-loader
        exclude: /node_modules/ // ignore node_modules
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }
    ],
    loaders: [
      
    ],
  },

  plugins: [
    /*
    new HtmlWebpackPlugin(
      {
        template: './src/index.html',
        inject: 'body'
      }
    ),
    */
    extractSass,
    new CopyWebpackPlugin([
      { from: './src/config/service.worker.js', to: './service.worker.js' },
      { from: './assets/img/launcher-icon-1x.png', to: './img/launcher-icon-1x.png'},
      { from: './assets/img/launcher-icon-2x.png', to: './img/launcher-icon-2x.png'},
      { from: './assets/img/launcher-icon-4x.png', to: './img/launcher-icon-4x.png'},
      { from: './assets/img/favicon.ico', to: './favicon.ico'},
      { from: './assets/manifest.json', to: './manifest.json'}
    ])
  ]
};
