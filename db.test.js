const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./db')


beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getUsers gets all users', () => {
  return db.joinUsersWithPlaylist(1, testDb)
    .then(playlists => {
      expect(playlists).toHaveLength(2)
      return null
    })
    .catch(err => expect(err).toBeNull())
})
