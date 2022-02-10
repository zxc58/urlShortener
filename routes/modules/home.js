// require modules set const
const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const logger = require('../../logger/logger')
// set route
router.get(/^\/[\w]{5}$/, (req, res) => {
  const x = req.path.substring(1)
  Url.findOne({ shortUrl: x }).then(result => {
    if (!result) { res.status(404).send('Sorry cant find that!') } else { res.redirect(result.originalUrl) }
  })
    .catch(err => {
      logger.error(err)
      res.status(500).send('server error ,please try again')
    })
})

router.get(/^\/$/, (req, res) => {
  res.render('index')
})

// exports
module.exports = router
