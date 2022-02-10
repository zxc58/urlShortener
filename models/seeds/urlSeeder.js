// require modules
const Url = require('../url')
const db = require('../../config/mongoose')
const urlSeed = require('../../urlSeed.json')
const logger = require('../../logger/logger')
// seeding
db.once('open', async () => {
  try{
    await Url.deleteMany({})
    await Url.create(urlSeed)
    logger.info('success seed')
  }catch(error){
    logger.error(error)
  }
  finally{
    process.exit()
  }
})
