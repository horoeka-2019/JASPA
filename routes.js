const express = require('express')
const homeRouter = express.Router()
const fs = require('fs')
const path = './foodData.json'

// routes

// server.get '/'

homeRouter.get('/', (req, res) => {
  // const template = './pages/index'
  // const viewData = data
  res.send('Hello')
  // res.render(template, viewData)
})

// POST data coming back (read and write) - redirect over to /list
homeRouter.post('/', (req, res) => {
  const addData = req.body

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) console.error(err.message)

    const parsedData = JSON.parse(data)
    const newData = parsedData.foodlist.push(addData)

    fs.writeFile(path, (JSON.stringify(newData)), { flag: 'a' }, (err) => {
      if (err) console.error(err.message)
      console.log('Your food has been added!')
      res.redirect('/list')
    })
  })
})

// server.get '/list'
homeRouter.get('/list', (req, res) => {
  const template = './pages/list'

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) console.error(err.message)

    const contents = JSON.parse(data)
    res.render(template, contents)
  })
})

module.exports = homeRouter
