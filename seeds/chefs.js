
const faker = require('faker')

const cities = ['Wellington', 'Auckland', 'Christchurch', 'Hamilton']
const searchTermsArray = ['man', 'woman', 'profile', 'chef', 'kitchen', 'chefs', 'nature', 'dinner', 'food', 'people', 'cake', 'lunch', 'brunch', 'breakfast' ]
const food = ['dinner', 'food', 'cake', 'lunch', 'brunch', 'breakfast', 'dessert']

const createFakeUser = () =>({
  name: faker.name.findName(),
  location: faker.random.arrayElement(cities),
  img: 'https://source.unsplash.com/800x450/?' + getArrayItem(),
  email: faker.internet.email(),
  bio: faker.lorem.paragraphs(),
  foodImg1: 'https://source.unsplash.com/800x450/?' + getFoodArrayItem(),
  foodImg2: 'https://source.unsplash.com/800x450/?' + getFoodArrayItem(),
  foodImg3: 'https://source.unsplash.com/800x450/?' + getFoodArrayItem(),
})

function getArrayItem () {
  randomNumber = Math.floor(Math.random()*14)
  return searchTermsArray[randomNumber]
}

function getFoodArrayItem () {
  randomNumber = Math.floor(Math.random()*7)
  return food[randomNumber]
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  const users = []
  const usersNum = 100
  for(let i = 0; i < usersNum; i++){
    users.push(createFakeUser())
    
  }
  return knex('chefs').del()
    .then(function () {
      // Inserts seed entries
      return knex('chefs').insert(users);
    });
};
