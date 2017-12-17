
const babel = require('rollup-plugin-babel')
const eslint = require('rollup-plugin-eslint')
const replace = require('rollup-plugin-replace')
const globals = require('rollup-plugin-node-globals')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const uglify = require('rollup-plugin-uglify')
const sass = require('rollup-plugin-sass')
const rollupTypescript = require('rollup-plugin-typescript')
const includePaths = require('rollup-plugin-includepaths')
// const path = require('path')

// utils
const isProduction = process.env.NODE_ENV === 'production'

const PATHS = {
  src: 'src/index.tsx',
  dist: 'build/bundle.js'
}

const includePathOptions = {
  include: {},
  paths: ['src/'],
  external: [],
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.html']
};

// config
const config = {

  entry: PATHS.src,
  dest: PATHS.dist,
  // sourceMap: isProduction ? 'none' : 'inline',
  format: 'iife',
  plugins: [
    // typescript
    rollupTypescript,
    // sass
    sass({ insert: true, output: false }),
    // replace
    replace({
      exclude: 'node_modules/**',
      ['process.env.NODE_ENV']: JSON.stringify(process.env.NODE_ENV || 'development'),
      ['process.env.BABEL_ENV']: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    // bundle
    commonjs({
      namedExports: {
        'node_modules/inferno/index.js': ['createVNode', 'render']
      },
      include: ['node_modules/**/*.js']
    }),
    // lint
    eslint({ exclude: 'src/styles/**' }),
    // transpile
    babel({ exclude: 'node_modules/**' }),
    // globals
    globals(),
    includePaths(includePathOptions),
    // resolve
    resolve({ jsnext: true, browser: true, main: true }),
    // uglify
    (isProduction && uglify({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })),
  ]

}

module.exports = config
