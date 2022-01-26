// require modules set const
const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const urls = require('./modules/urls')

// import router
router.use('/', home)
router.use('/urls', urls)

// exports
module.exports = router
