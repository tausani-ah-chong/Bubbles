const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

module.exports = {
  // getUsers,
  // getPlaylist,
  // getSong,
  //joinUsersWithPlaylist,

}

function getUsers (db = database) {
  return db('users')
    .select()
}

function getPlaylist (db = database) {

}

function getSong (db = database) {
  
}

function joinUsersWithPlaylist(id, db = database) {
  return db('users')
    .join('playlists', 'users.id', 'user_id')
    .where('users.id', id)
    .select('users.id', 'users.name',  'playlists_name as playlistName')
    .first()
    .then(result => result)
}
