// require modules
const mongoose = require('mongoose')

// set schema
const schema = new mongoose.Schema({
  shortUrl: { type: String, required: true },
  originalUrl: { type: String, required: true }
})

// exports
module.exports = mongoose.model('Url', schema)
