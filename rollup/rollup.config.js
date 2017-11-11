
const babel = require('rollup-plugin-babel')
const eslint = require('rollup-plugin-eslint')
const replace = require('rollup-plugin-replace')
const globals = require('rollup-plugin-node-globals')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const uglify = require('rollup-plugin-uglify')
const sass = require('rollup-plugin-sass')
const rollupTypescript = require('rollup-plugin-typescript2')
// const path = require('path')

// utils
const isProduction = process.env.NODE_ENV === 'production'

const PATHS = {
  src: 'src/test.tsx',
  dist: 'build/bundle.js'
}

// config
const config = {

  entry: PATHS.src,
  dest: PATHS.dist,
  sourceMap: 'inline',
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
        'node_modules/inferno/index.js': ['createVNode']
      },
      include: ['node_modules/**/*.js']
    }),
    // lint
    eslint({ exclude: 'src/styles/**' }),
    // transpile
    babel({ exclude: 'node_modules/**' }),
    // globals
    globals(),
    // resolve
    resolve({ jsnext: true, browser: true, main: true }),
    // uglify
    (isProduction && uglify({
      compress: {
        // compress options
        booleans: true,
        dead_code: true,
        drop_debugger: true,
        unused: true
      },
      ie8: false,
      parse: {
        // parse options
        html5_comments: false,
        shebang: false
      },
      sourceMap: false,
      toplevel: false,
      warnings: false
    })),
  ]

}

module.exports = config
