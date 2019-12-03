const path = require('path')
const express = require('express')

const server = express()
const chefRoutes = require('./routes/chefs')
const authRoutes = require('./routes/auth') 

server.use(express.json())
server.use('/api/v1', authRoutes)
server.use('/api/v1/chefs', chefRoutes)
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
