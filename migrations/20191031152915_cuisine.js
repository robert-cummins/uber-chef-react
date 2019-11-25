exports.up = function(knex) {
  return knex.schema.createTable('cuisine', (table) => {
      table.increments('cuisine_id')
      table.string('cuisine')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cuisine')
};
