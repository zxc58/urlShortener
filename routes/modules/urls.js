//require modules set const
const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const randomString = require('../../myFunction')

//set route
router.post('/', (req, res) => {
  try { new URL(req.body.originalUrl) } catch (e) { console.log('url在後端認證錯誤') }
  
  Url.findOne({ originalUrl: req.body.originalUrl }).lean().then(result => {
    if (!result) {
      const string = randomString(5)
      const y = { originalUrl: req.body.originalUrl, shortUrl: string }
      Url.create(y).then(() => {
        res.render('index', { result: y })
      })
    } else {
      res.render('index', { result })
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).send('server error ,please try again')
  })
})

//exports
module.exports = router
