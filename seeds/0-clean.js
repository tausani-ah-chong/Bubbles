
exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

  return empty('playlists')()
   .then(empty('songs'))
   .then(empty('users'))
}