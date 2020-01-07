const database = require('./connection')

const {generatePasswordHash} = require('../auth/hash')


function createUser (email, first_name, last_name, password,testDb) {
  const db = testDb || database

  return generatePasswordHash(password)
    .then(hash => {
      return db('users').insert({email, first_name, last_name, hash}, "user_id")
    })
}

function getUserByEmail(email, db = database){
  return db('users').where('email', email).first()
}

function userExists (email, testDb) {
  const db = testDb || database

  return db('users')
    .where('email', email)
    .then(users => users.length > 0)
}


module.exports = {
  userExists,
  createUser,
  getUserByEmail,
}