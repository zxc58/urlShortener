const { createClient } = require('redis')
// const logger = require('../logger')
const redisClient = createClient({ url: 'redis://localhost:6379' })

redisClient.on('error', (err) => console.error('Redis Client Error', err))
redisClient.on('connect', () => console.info('Redis Client Success'))
redisClient.connect()
module.exports = redisClient
