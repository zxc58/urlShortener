// require modules set const
const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const myFunc = require('../../myFunction')
const logger = require('../../logger/logger')
// set route
router.post('/', (req, res) => {
  let testURL = true
  try { new URL(req.body.originalUrl) } catch (e) { console.log('url在後端認證錯誤'); testURL = !testURL; res.status(500).send('url在後端認證錯誤') }
  if (testURL) {
    Url.findOne({ originalUrl: req.body.originalUrl }).lean().then(result => {
      if (!result) {
        new Promise((resolve, reject) => {
          myFunc.shortUrlCreate(req.body.originalUrl, resolve, reject, 10000)
        }).then(result => res.render('index', { result, host:req.hostname }), result => res.status(500).send(result))
      } else {
        res.render('index', { result, host:req.hostname })
      }
    })
      .catch(err => {
        logger.error(err)
        res.status(500).send('server error ,please try again')
      })
  }
})

// exports
module.exports = router
