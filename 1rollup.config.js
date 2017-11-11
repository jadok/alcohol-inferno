import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import rollupTypescript from 'rollup-plugin-typescript'
import eslint from 'rollup-plugin-eslint'
import commonjs from 'rollup-plugin-commonjs'
import alias from 'rollup-plugin-alias'
import path from 'path'

export default {
  /*onwarn: ({ loc, frame, message }) => {
    // print location if applicable
    if (loc) {
      console.warn(`${loc.file} (${loc.line}:${loc.column}) ${message}`);
      if (frame) console.warn(frame);
    }
    else {
      console.warn(message);
    }
  },*/
  moduleContext: './src/',
  input: './src/test.tsx',
  ouput: {
    file: 'public/bundle.js',
    format: 'iife',
    name: 'AlcoholBundle',
  },
  sourcemap: 'inline',
  plugin: [
    resolve({
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      include: ['node_modules/**/*.js'],
      namedExports: {},
    }),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    alias({
      inferno: path.join(__dirname, '../node_modules/inferno/dist/index.es'),
      'inferno-component': path.join(__dirname, '../node_modules/inferno-component/dist/index.es'),
      'inferno-create-element': path.join(__dirname, '../node_modules/inferno-create-element/dist/index.es'),
    }),
    rollupTypescript
  ]
}
