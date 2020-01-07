const router = require('express').Router()

const { userExists, createUser } = require('../db/users')
const token = require('../auth/token')

router.post('/login', token.issue)
router.post('/register', register, token.issue)

function register (req, res, next) {
    const { email, name, password} = req.body
    userExists(email)
      .then(exists => {
        if (exists) return res.status(400).send({ message: "Email In Use" })
  
        createUser(email, name, password)
          .then(() => next())
          .catch(err => {
            console.log(err)
            res.status(500).send({message: "Server Error"})
          })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({message: "Server Error"})
      })
  }

module.exports = router