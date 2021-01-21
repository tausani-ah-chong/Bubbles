exports.up = knex => {
  return knex.schema.createTable('users', (table => {
    table.increments('id').primary()
    table.string('name')
    table.string('city')
    table.string('img')
  }))
  
}

exports.down = knex => {
  return knex.schema.dropTable('users')
}
