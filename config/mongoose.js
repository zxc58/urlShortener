// require modules set const
require('dotenv').config()
const mongoose = require('mongoose')
const logger = require('../logger')
const db = mongoose.connection
const MONGODB_URI = process.env.MONGODB_URI
// connect db
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
db.on('error', () => logger.error('db occured error'))
db.once('open', () => logger.info('db opened'))

// exports
module.exports = db
