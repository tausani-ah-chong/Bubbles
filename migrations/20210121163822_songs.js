exports.up = knex => {
  return knex.schema.createTable('songs', (table => {
    table.increments('id').primary()
    table.string('artist')
    table.string('song_name')
  }))
}

exports.down = knex => {
  return knex.schema.dropTable('songs')
}
