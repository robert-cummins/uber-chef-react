
exports.up = function(knex) {
  return knex.schema.createTable('chefs', (table) => {
      table.increments('chef_id')
      table.string('name')
      table.string('location')
      table.string('img')
      table.string('email')
      table.string('bio', 5000)
      table.string('foodImg1')
      table.string('foodImg2')
      table.string('foodImg3')
      table.binary('password')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('chefs')
};
