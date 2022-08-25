// random function
const randomString = (stringLength = 5) => {
  const string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const length = string.length
  let randomString = ''
  for (let i = 0; i < stringLength; i++) {
    randomString += string.charAt(Math.floor(Math.random() * length))
  }
  return randomString
}
module.exports = {
  randomString
}
