exports.up = function(knex) {
    return knex.schema.createTable('chefCuisine', (table) => {
      table.increments('chefCuisine_id')
        table.integer('chef_id')
        table.integer('cuisine_id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('chefCuisine')
  };
