// require modules
const Url = require('../url')
const db = require('../../config/mongoose')
const urlSeed = require('../../urlSeed.json')

// seeding
db.once('open', async () => {
  try{
    await Url.remove({})
    await Url.create(urlSeed)
    console.log('success seed')
  }catch(error){
    console.log(error)
  }
  finally{
    process.exit()
  }
})
