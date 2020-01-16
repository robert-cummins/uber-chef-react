const database = require('./connection')

const {generatePasswordHash} = require('../auth/hash')


function createUser (chef) {
  const db = database
  console.log(chef)
  return generatePasswordHash(chef.password)
    .then(hash => {
      console.log(hash)
      return db('chefs').insert(chef, "chef_id")
    })
}

function getUserByEmail(email, db = database){
  return db('chefs').where('email', email).first()
}

function userExists (email, testDb) {
  const db = database

  return db('chefs')
    .where('email', email)
    .then(users => users.length > 0)
}


module.exports = {
  userExists,
  createUser,
  getUserByEmail,
}