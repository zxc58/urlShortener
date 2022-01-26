// random function
const Url = require('./models/url')
const randomString = number => {
  const string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const length = string.length
  let returnString = ''
  for (let i = 0; i < number; i++) {
    returnString += string.charAt(Math.floor(Math.random() * length))
  }
  return returnString
}
module.exports = {
  shortUrlCreate: (originalUrl, Resolve, Reject, i) => {
    i-- // 最多 random i次
    const shortUrl = randomString(5)
    Url.findOne({ shortUrl: shortUrl })
      .then(result => {
        if (result && i >= 0) {
          shortUrlCreate(originalUrl, Resolve, Reject, i)
        } else if (i < 0) {
          Reject('random出db已存在的short過多次')
        } else {
          const urlData = { shortUrl, originalUrl }
          Url.create(urlData)
          Resolve(urlData)
        }
      })
  }
}
