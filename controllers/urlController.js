const redisClient = require('../config/redis')
const Url = require('../models/url')
const { randomString } = require('../helpers/randomString')
const logger = require('../logger')

const urlController = {
  getShortUrl: async (req, res, next) => {
    try {
      const originalUrl = req.body.originalUrl
      const host = req.hostname
      // search redis
      const redisResult = await redisClient.get(originalUrl)
      if (redisResult) { return res.render('index', { result: { originalUrl, shortUrl: redisResult }, host }) }
      // search database
      const databaseResult = await Url.findOne({ originalUrl }).lean()
      if (databaseResult) {
        await Promise.all([
          redisClient.set(originalUrl, databaseResult.shortUrl),
          redisClient.set(databaseResult.shortUrl, originalUrl)
        ])
        return res.render('index', { result: databaseResult, host })
      }
      return next()
    } catch (error) {
      logger.error(`Get URL error at ${new Date().toISOString()} , reason:${error}`)
    }
  },
  // create new short URL
  putUrl: async (req, res, next) => {
    try {
      const host = req.hostname
      const originalUrl = req.body.originalUrl
      const shortUrl = randomString()
      await Promise.all([
        Url.findOneAndUpdate({ shortUrl }, { originalUrl }, { upsert: true }),
        redisClient.set(originalUrl, shortUrl),
        redisClient.set(shortUrl, originalUrl)
      ])
      return res.render('index', { result: { originalUrl, shortUrl }, host })
    } catch (error) {
      logger.error(`Put URL error at ${new Date().toISOString()} , reason:${error}`)
    }
  }
}
module.exports = urlController
