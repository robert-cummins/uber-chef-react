const path = require('path')
const express = require('express')
const cors = require('cors')
const server = express()

const authRoutes = require('./routes/auth')
const chefRoutes = require('./routes/chefs') 

server.use(cors('*'))
server.use(express.json())
server.use('/api/v1/chefs', chefRoutes)
server.use('/api/auth', authRoutes)
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
