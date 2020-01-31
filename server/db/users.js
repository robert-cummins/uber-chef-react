const database = require('./connection')
const db = require('../db/chefs')
const {generatePasswordHash} = require('../auth/hash')


function createUser (chef) {
  const db = database
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
      return db('chefs').insert(dataChef, "chef_id")
      .then(chefId =>{
        let chefCuisine = {
          chef_id: chefId[0],
          cuisine_id: chef.cuisine
        }
        db('chefCuisine').insert(chefCuisine).then(()=>{})
      })
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