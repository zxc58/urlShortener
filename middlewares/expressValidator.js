const { validationResult } = require('express-validator')

const dataCheckpoint = {
  finalCheckpoint: (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() })
    }
    return next()
  }
}

module.exports = dataCheckpoint
