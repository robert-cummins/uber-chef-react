const connection = require('./connection')

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

  function updateChef(id, chef, db=database){
    return db('chefs').where('chef_id', id).update(chef)
}

function updateChefCuisne(id, chefCuisine, db=database){
    return db('chefCuisine').where('chef_id', id).update(chefCuisine)
}

module.exports = {
    getChefsByCuisineAndLocation,
    getChefsByLocation,
    getChefByEmail,
    deleteChef,
    updateChef,
    updateChefCuisne
}