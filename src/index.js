//styles here
import '../styles/main.css'


// Import a logger for easier debugging.
import debug from 'debug'
const log = debug('app:log')

// TODO rollup replace issue - this plugin replaces the variables through string replacement.... why?
//console.log(ENV, 'ENV')

if (ENV !== 'production') {

  // Enable the logger.
  debug.enable('*')
  log('Logging is enabled!')

  // Enable LiveReload
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  )
}
else {
  debug.disable()
}



