const environment = process.env.NODE_ENV || "development"
const config = require("../../knexfile")[environment]
const database = require("knex")(config)
const { generateHash } = require('authenticare/server')

function getChefsByCuisineAndLocation(cuisineId, location, db = database) {
    const baseQuery = db('cuisine')
        .leftJoin('chefCuisine', 'chefCuisine.cuisine_id', 'cuisine.cuisine_id')
        .leftJoin('chefs', "chefCuisine.chef_id", 'chefs.chef_id')
    if (cuisineId) baseQuery.where('cuisine.cuisine_id', cuisineId)

    if (location) baseQuery.where('chefs.location', location)

    return baseQuery
}


function getChefsByLocation(location, db = database){
    return db('chefs')
    .where('location', location)
    .select()
}

function addChef(chef, db=database){
    return userExists(chef.email, db)
    .then(exists => {
        if(exists){
            return Promise.reject(new Error('User exists'))
        }
    })
    .then(() => generateHash(chef.password))
    .then(passwordHash => {
        chef.password = passwordHash
        return db('chefs').insert(chef)
    })
}

function addChefCuisine(chefCuisine, db=database){
    return db('chefCuisine').insert(chefCuisine)
}

function userExists (email, db = database) {
    return db('chefs')
      .count('chef_id as n')
      .where('email', email)
      .then(count => {
        return count[0].n > 0
      })
  }

  function getUserByEmail(email, db){
      return db('chefs')
      .select()
      .where('email', email)
      .first()
  }

module.exports = {
    getChefsByCuisineAndLocation,
    getChefsByLocation,
    addChef,
    addChefCuisine,
    getUserByEmail,
    userExists
}