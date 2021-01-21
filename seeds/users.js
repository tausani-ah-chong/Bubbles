
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'multi', bio:''},
        {id: 2, name: 'tausani', bio:''},
        {id: 3, name: 'pete', bio:''},
        {id: 4, name: 'steve', bio:''},
        {id: 5, name: 'peter', bio:''}
      ]);
    });
};
