if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const routes = require('./routers')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(routes)

app.use(errorHandler)

module.exports = app
