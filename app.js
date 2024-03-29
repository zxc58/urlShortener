// require module
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const expressHandlebars = require('express-handlebars')
require('./config/mongoose')
const indexRouter = require('./routes/index')
// const helmet = require('helmet')
const logger = require('./logger')
// set const
const app = express()
const port = process.env.PORT

// app set
// app.use(helmet())
app.engine('handlebars', expressHandlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))
app.use(indexRouter)
app.use((req, res, next) => res.send(req.params))

// app start
app.listen(port, () => {
  const date = new Date()
  logger.info(`server start on http://localhost:${port} at ` + date.toString())
})
