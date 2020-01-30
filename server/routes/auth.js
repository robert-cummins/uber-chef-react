const router = require('express').Router()

const { userExists, createUser } = require('../db/users')
const token = require('../auth/token')

router.post('/login', token.issue)
router.post('/register', register, token.issue)

function register (req, res, next) {
  console.log(next)
    userExists(req.body.email)
      .then(exists => {
        if (exists) return res.status(400).send({ message: "Email In Use" })
  
        createUser(req.body)
          .then((res) => {console.log(res)})
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