// rollup template for react
/* global process */

import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'


// postcss
import postcss from 'rollup-plugin-postcss'
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'


const config = {
  entry: 'src/js/index.js',
  dest: 'build/js/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    // postcss processing
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates:false }),
        cssnano()
      ],
      extensions: ['.css']
    }),

    eslint({
      exclude: [ 'src/styles/**' ]
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      namedExports: {
        'react-dom': [ 'render' ]
      }
    }),
    babel({
      exclude:'node_modules/**'
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ]
}
export default config
