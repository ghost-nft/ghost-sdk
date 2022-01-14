
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdk-test.cjs.production.min.js')
} else {
  module.exports = require('./sdk-test.cjs.development.js')
}
