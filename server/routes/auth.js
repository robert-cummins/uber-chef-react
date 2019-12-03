 
const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')
const router = express.Router()

const {
  userExists,
  getUserByEmail,
  addChef } = require('../db/chefs')

  applyAuthRoutes(router, {
    userExists,
    getUserByEmail,
    addChef
  })
  
  module.exports = router