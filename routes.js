const express = require('express')
const homeRouter = express.Router()
const data = require('./foodData.json')
const fs = require('fs')

// routes

// server.get '/'

homeRouter.get('/', (req, res) => {
  const template = './pages/index'
  const viewData = data
  res.render(template, viewData)
})

// server.get '/list'








// POST data coming back (read and write) - redirect over to /list
