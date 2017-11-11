const rollup = require('rollup')

const babel = require('rollup-plugin-babel')
const eslint = require('rollup-plugin-eslint')
const replace = require('rollup-plugin-replace')
const globals = require('rollup-plugin-node-globals')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const uglify = require('rollup-plugin-uglify')
const sass = require('rollup-plugin-sass')
const rollupTypescript = require('rollup-plugin-typescript2')

// const config = require('./rollup.config.js')

const pkgJSON = require('../package.json')

const isProduction = process.env.NODE_ENV === 'production'

const PATHS = {
  src: 'src/test.tsx',
  dist: 'build/bundle.js'
}

// config
const config = {

  entry: PATHS.src,

  plugins: [
    // typescript
    rollupTypescript({
      abortOnError: false,
      check: false,
      clean: true,
      exclude: ['*.test.*']
    }),
    // sass
    sass({ insert: true, output: false }),
    // replace
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.BABEL_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
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

const inputOptions = config

const outputOptions = {
  dest: PATHS.dist,
  sourceMap: isProduction ? 'none' : 'inline',
  format: 'iife',
}

const watchOptions = {
  watch: {
    include: 'src/**'
  }
}

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);
  await rollup.watch(watchOptions)

  console.log(bundle.imports); // an array of external dependencies
  console.log(bundle.exports); // an array of names exported by the entry point
  console.log(bundle.modules); // an array of module objects

  // generate code and a sourcemap
  /* const { code, map } = */ await bundle.generate(outputOptions);

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

build();

/*
rollup(config).then(() => {
  console.log(`${pkgJSON.name} - ${pkgJSON.version} created `);
})
*/
