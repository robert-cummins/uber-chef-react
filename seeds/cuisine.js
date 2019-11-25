
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cuisine').del()
    .then(function () {
      // Inserts seed entries
      return knex('cuisine').insert([
        {cuisine_id: 201, cuisine: 'Mexican'},
        {cuisine_id: 202, cuisine: 'Italian'},
        {cuisine_id: 203, cuisine: 'French'},
        {cuisine_id: 204, cuisine: 'Thai'},
        {cuisine_id: 205, cuisine: 'Indian'},
        {cuisine_id: 206, cuisine: 'Japenese'},
        {cuisine_id: 207, cuisine: 'American'},
        {cuisine_id: 208, cuisine: 'Malaysian'},
        {cuisine_id: 210, cuisine: 'Greek'},
      ]);
    });
};
