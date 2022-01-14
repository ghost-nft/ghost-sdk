
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ghost-sdk.cjs.production.min.js')
} else {
  module.exports = require('./ghost-sdk.cjs.development.js')
}
