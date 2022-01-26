//require module 
const express = require('express')
const expressHandlebars = require('express-handlebars')
require('./config/mongoose')
const indexRouter = require('./routes/index')

//set const
const app = express()
const port = 3000

//app set
app.engine('handlebars', expressHandlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))
app.use(indexRouter)

//app start
app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`)
})
