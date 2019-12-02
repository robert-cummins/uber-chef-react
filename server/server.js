const path = require('path')
const express = require('express')

const server = express()
const chefRoutes = require('./routes/chefs') 

server.use(express.json())
server.use('/api/v1/chefs', chefRoutes)
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
