//global styles here
import './styles/main.css'

// import react modules
import './scripts/components/Counter'

/* eslint quotes: "off" , no-constant-condition: "off" */
// disable quotes rule...
// TODO rollup replace issue - this plugin replaces the variables through string replacement.
// console.log(ENV, 'ENV')

if (ENV !== 'production') {
  // Enable LiveReload in development
  const lrScriptEl =  document.createElement('script')
  lrScriptEl.setAttribute(
    'src',
    `http://${(location.host || 'localhost').split(':')[0]}:35729/livereload.js?snipver=1`
  )
  document.body.appendChild(lrScriptEl)
}




