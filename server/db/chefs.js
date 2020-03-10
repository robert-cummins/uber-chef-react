const connection = require('./connection')
const {generatePasswordHash} = require('../auth/hash')

function getChefsByCuisineAndLocation(cuisineId, location, db = connection) {
    const baseQuery = db('cuisine')
        .leftJoin('chefCuisine', 'chefCuisine.cuisine_id', 'cuisine.cuisine_id')
        .leftJoin('chefs', "chefCuisine.chef_id", 'chefs.chef_id')
    if (cuisineId) baseQuery.where('cuisine.cuisine_id', cuisineId)

    if (location) baseQuery.where('chefs.location', location)

    return baseQuery
}


function getChefsByLocation(location, db = connection){
    return db('chefs')
    .where('location', location)
    .select()
}


function getChefByEmail(email, db = connection){
    return db('chefs').where('email', email).first()
  }

function deleteChef(id, db=connection){
    return db('chefs').where('chef_id', id).delete().then(id => {console.log(id)})
  }

  function updateChef(id, chef, db=connection){
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
      return db('chefs').where('chef_id', id).update(dataChef)
      .then(chefId =>{
        let chefCuisine = {
          chef_id: chefId[0],
          cuisine_id: chef.cuisine
        }
        db('chefCuisine').where('chef_id', id).update(chefCuisine)
      })
    })   
}



module.exports = {
    getChefsByCuisineAndLocation,
    getChefsByLocation,
    getChefByEmail,
    deleteChef,
    updateChef,
}