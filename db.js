const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

module.exports = {
  getUsers,
  getSongsArtist,
  joinUsersWithPlaylist,
  createUser,
}

function getUsers (db = database) {
  return db('users')
    .select()
}

function getSongsArtist (id, db = database) {
  return db('playlistsongs')
    .join('songs', 'playlistsongs.song_id', 'songs.id')
    .where('playlist_id', id)
    .select()
}

function joinUsersWithPlaylist(id, db = database) {
  return db('users')
    .join('playlists', 'users.id', 'playlists.user_id')
    .where('users.id', id)
    .select('users.id', 'users.name',  'playlists.name')
    .then(result => result)
}

function createUser(name, city, db = database) {
  return db('users')
    .insert({
      name,
      city
    })
    .then(result => result[0])
  }
