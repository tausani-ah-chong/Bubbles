exports.up = knex => {
  return knex.schema.createTable('songs', (table => {
    table.increments('id').primary()
    table.string('song')
    table.string('artist')
  }))
}

exports.down = knex => {
  return knex.schema.dropTable('songs')
}
