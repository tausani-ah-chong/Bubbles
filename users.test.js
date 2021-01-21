const request = require('supertest')

const server = require('./server')
const testEnv = require('./test-environment')

let testDb = testEnv.getTestDb()

// Create a separate in-memory database before each test.
beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

// Destroy the database connection after each test.
afterEach(() => testEnv.cleanup(testDb))

test('Check root rout', () => {
  const expected = 'Error'
  return request(server)
    .get('/')
    .then((res) => {
      return expect(res.text).to(expected)
    })
})