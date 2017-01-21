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
// import autoprefixer from 'autoprefixer' included in postcss-cssnext
import postcssModules from 'postcss-modules'

//import styleVars from './src/styles/vars.js'

import ymlParser from './src/scripts/yml-parser'

// cache for css modules
const cssExportMap = {}

const config = {
  entry: 'src/index.js',
  dest: 'build/js/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
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
        'react-dom': [ 'render' ],
        'react': ['PropTypes', 'Component']
      }
    }),
    eslint({
      exclude: [ 'src/styles', '**/*.css' ],
    }),
    babel({
      exclude: ['node_modules/**', '**/*.css'],
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  
    // postcss processing
    postcss({
      plugins: [
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens
          }
        }),
        simplevars({
          variables: ymlParser('./src/styles/vars.yml')
//TODO fix in case of using var rollup watch doesn't update
        }),
        nested(),
        cssnext({ warnForDuplicates:false }),
        cssnano(),
      ],
      getExport (id) {
        return cssExportMap[id]
      },
      extensions: ['.css']
    })
  ]
}
export default config
