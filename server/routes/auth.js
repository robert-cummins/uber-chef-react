const router = require('express').Router()

const { userExists, createUser } = require('../db/users')
const token = require('../auth/token')

// router.post('/register', register, token.issue)

module.exports = router