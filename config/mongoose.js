//require modules set const
const mongoose = require('mongoose')
const db = mongoose.connection

//connect db
mongoose.connect('mongodb://localhost/url-list')
db.on('error', () => console.log('db error on config'))
db.once('open', () => console.log('db open on config'))

//exports
module.exports = db
