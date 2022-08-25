// require modules set const
const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { finalCheckpoint } = require('../../middlewares/expressValidator')
const { getShortUrl, putUrl } = require('../../controllers/urlController')
// set route
router.post('/', body('originalUrl').isURL(), finalCheckpoint, getShortUrl, putUrl)

// exports
module.exports = router
