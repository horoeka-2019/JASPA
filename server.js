const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const routes = require('./routes')

module.exports = server

// middleware
server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// configuration
server.engine('handlebars.hbs', hbs({ extname: '.hbs' }))

// routes
server.use('/', routes)
