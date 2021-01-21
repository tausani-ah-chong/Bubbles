const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

module.exports = {
  // getUsers,
  // getPlaylist,
  // getSong,
}

function getUsers (db = database) {
  return db('users')
    .select()
}

function getPlaylist (db = database) {

}

function getSong (db = database) {
  
}