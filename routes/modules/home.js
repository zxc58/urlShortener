//
const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
//
//

router.get(/^\/[\w]{5}$/, (req, res) => {
  const x = req.path.substring(1)
  Url.findOne({ shortUrl: x }).then(result => {
    if (!result) { res.status(404).send('404 NOT FOUND') } else { res.redirect(result.originalUrl) }
  })
    .catch(err => {
      console.log(err)
      res.status(500).send('server error ,please try again')
    })
})
router.get(/^\/$/, (req, res) => {
  res.render('index')
})
//
//
module.exports = router
