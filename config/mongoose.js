// require modules set const
const mongoose = require('mongoose')
const logger = require('../logger/logger')
const db = mongoose.connection
const MONGODB_URI =process.env.MONGODB_URI
// connect db
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
db.on('error', () => logger.error('db error on config'))
db.once('open', () => logger.info('db open on config'))

// exports
module.exports = db
