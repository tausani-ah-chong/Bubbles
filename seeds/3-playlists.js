
exports.seed = function(knex) {
  return knex('playlists').insert([
    {id: 1, playlist_name: 'Multi 1', user_id: 1 },
    {id: 2, playlist_name: 'Multi 2', user_id: 1 },
    {id: 4, playlist_name: 'Sani 1', user_id: 2 },
    {id: 3, playlist_name: 'Sani 2', user_id: 2 },
    {id: 5, playlist_name: 'House', user_id: 3 },
    {id: 6, playlist_name: 'Rock', user_id: 3 },
    {id: 7, playlist_name: 'Peter 1', user_id: 4 },
    {id: 8, playlist_name: 'Peter 2', user_id: 4 },
    {id: 9, playlist_name: 'Disney', user_id: 5 },
    {id: 10, playlist_name: 'Not Disney', user_id: 5 }
  ])
}
