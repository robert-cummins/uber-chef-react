const faker = require('faker')

const cuisineId = [201, 202, 203, 204, 205, 206, 207, 208, 210]

let chefCuisineObj = {
  chefCuisine_id: 300,
  chef_id: 0,
  cuisine_id: 201
}

const createChefCuisine = () => {
  return chefCuisineObj ={
    chefCuisine_id: chefCuisineObj.chefCuisine_id +1,
    chef_id: chefCuisineObj.chef_id + 1,
    cuisine_id: faker.random.arrayElement(cuisineId)
  }
}


exports.seed = function(knex) {
  // Deletes ALL existing entries
  const users = []
  const usersNum = 100
  for(let i = 0; i < usersNum; i++){
    users.push(createChefCuisine())
    
  }
 
    
  return knex('chefCuisine').del()
    .then(function () {
      // Inserts seed entries
      return knex('chefCuisine').insert(users);
    });
};
