
exports.seed = function(knex) {
  return knex('playlists').insert([
    {id: 1, name: 'Multi 1', user_id: 1 },
    {id: 2, name: 'Multi 2', user_id: 1 },
    {id: 4, name: 'Sani 1', user_id: 2 },
    {id: 3, name: 'Sani 2', user_id: 2 },
    {id: 5, name: 'House', user_id: 3 },
    {id: 6, name: 'Rock', user_id: 3 },
    {id: 7, name: 'Peter 1', user_id: 4 },
    {id: 8, name: 'Peter 2', user_id: 4 },
    {id: 9, name: 'Disney', user_id: 5 },
    {id: 10, name: 'Not Disney', user_id: 5 }
  ])
}
