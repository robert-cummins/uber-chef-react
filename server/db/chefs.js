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

function addChef(chef, db=connection){
    return db('chefs').insert(chef)
}

function addChefCuisine(chefCuisine, db=connection){
    return db('chefCuisine').insert(chefCuisine)
}


module.exports = {
    getChefsByCuisineAndLocation,
    getChefsByLocation,
    addChef,
    addChefCuisine
}