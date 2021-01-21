exports.up = knex => {
  return knex.schema.createTable('playlists', (table => {
    table.increments('id').primary()
    table.string('playlist_name')
    table.integer('user_id').references('user.id')
  }))
}

exports.down = knex => {
  return knex.schema.dropTable('playlists')
}
