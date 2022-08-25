// require modules set const
const express = require('express')
const router = express.Router()
const { param } = require('express-validator')
const { responseRedirect, getHomepage } = require('../../controllers/homeController')
const { finalCheckpoint } = require('../../middlewares/expressValidator')
// set route
router.get('/:shortUrl', param('shortUrl').isAlphanumeric().isLength({ min: 1, max: 5 }), finalCheckpoint
  , responseRedirect
)
router.get('/', getHomepage)
// exports
module.exports = router
