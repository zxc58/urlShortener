//
const Url = require('../url')
const db = require('../../config/mongoose')
const urlSeed = require('../../urlSeed.json')

//
db.once('open', () => {
  Url.create(urlSeed).then(() => console.log('success seed'))
    .catch(err => console.log(err))
    .finally(() => process.exit())
})
