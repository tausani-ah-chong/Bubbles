exports.up = knex => {
  return knex.schema.createTable('playlistsongs', (table => {
    table.increments('id').primary()
    table.integer('playlist_id').references('playlists.id')
    table.integer('song_id').references('songs.id')
  }))
}

exports.down = knex => {
  return knex.schema.dropTable('playlistsongs')
}
