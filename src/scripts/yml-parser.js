import jsYaml from 'js-yaml'
import fs from 'fs'

const ymlParser = p => 
  jsYaml.safeLoad(fs.readFileSync(p, 'utf8'))

export default ymlParser
