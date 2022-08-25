const redisClient = require('../config/redis')
const Url = require('../models/url')
const logger = require('../logger')

const homeController = {
  getHomepage: (req, res) => {
    return res.render('index')
  },
  responseRedirect: async (req, res, next) => {
    try {
      const shortUrl = req.params.shortUrl
      const redisResult = await redisClient.get(shortUrl)
      if (redisResult) { return res.redirect(redisResult) }
      const databaseResult = await Url.findOne({ shortUrl }).lean()
      if (databaseResult) {
        await Promise.all([
          redisClient.set(shortUrl, databaseResult.originalUrl),
          redisClient.set(databaseResult.originalUrl, shortUrl)
        ])
        return res.redirect(databaseResult.originalUrl)
      }
      return next()
    } catch (error) {
      const time = new Date()
      logger.error('Homepage error at ' + time.toISOString())
    }
  }
}
module.exports = homeController
