const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const database = require("knex")(config);

function getChefsByCuisineAndLocation(cuisineId, location, db = database) {
    const baseQuery = db('cuisine')
        .leftJoin('chefCuisine', 'chefCuisine.cuisine_id', 'cuisine.cuisine_id')
        .leftJoin('chefs', "chefCuisine.chef_id", 'chefs.chef_id')
    if (cuisineId) baseQuery.where('cuisine.cuisine_id', cuisineId)

    if (location) baseQuery.where('chefs.location', location)

    return baseQuery
}


function getChefCuisinesbyLocation(location, db = database) {
    return db('chefs')
        .leftJoin('chefCuisine', 'chefCuisine.chef_id', 'chefs.chef_id')
        .leftJoin('cuisine', "chefCuisine.cuisine_id", 'cuisine.cuisine_id')
        .where('chefs.location', location)
}



module.exports = {
    getChefsByCuisineAndLocation,
    getChefCuisinesbyLocation,
}