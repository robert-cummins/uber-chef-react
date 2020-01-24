const database = require('./connection')

const {generatePasswordHash} = require('../auth/hash')


function createUser (chef) {
  const db = database
  console.log(chef)
  return generatePasswordHash(chef.password)
    .then(hash => {
     let dataChef = { 
      name: chef.name,
      chefImg: chef.chefImg,
      email: chef.email,
      password: hash,
      location: chef.location,
      bio: chef.bio,
      foodImg1: chef.foodImg1,
      foodImg2: chef.foodImg2,
      foodImg3: chef.foodImg3 
    }

      console.log(hash)
      return db('chefs').insert(dataChef, "chef_id")
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