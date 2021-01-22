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

test('test getUsers', () => {
  return db.getUsers(testDb)
    .then(users => {
      expect(users).toHaveLength(5)
      return null
    })
    .catch(err => expect(err).toBeNull())
})

test('test getSongsArtist', () => {
  return db.getSongsArtist(1, testDb)
    .then(songs => {
      expect(songs).toHaveLength(5)
      return null
    })
    .catch(err => expect(err).toBeNull())
})

test('getUsers gets all users', () => {
  return db.joinUsersWithPlaylist(1, testDb)
    .then(playlists => {
      expect(playlists).toHaveLength(2)
      return null
    })
    .catch(err => expect(err).toBeNull())
})
