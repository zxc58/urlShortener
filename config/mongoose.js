// require modules set const
const mongoose = require('mongoose')
const db = mongoose.connection
const MONGODB_URI =process.env.MONGODB_URI || `mongodb://localhost/url-list`
// connect db
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
db.on('error', () => console.log('db error on config'))
db.once('open', () => console.log('db open on config'))

// exports
module.exports = db
