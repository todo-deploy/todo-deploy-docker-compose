const assert = require('assert')
const http = require('http')
const mongodb = require('mongodb').MongoClient

const config = require('./config')

const it200 = (description, url) => {
  it(description, done => {
    http.get(url, res => {
      assert.equal(200, res.statusCode)
      done()
    })
  })
}

describe('Frontend', () => {
  it200('should return 200', `http://${config.host}:${config.port}`)
})

describe('Backend', () => {
  it200('should return 200', `http://${config.host}:${config.port}/api`)
})

describe('Database', () => {
  it('should connect', done => {
    mongodb.connect(`mongodb://${config.dbUser}:${config.dbPass}@${config.dbHost}:${config.dbPort}/${config.dbName}`, (err, db) => {
      if(err) {
        throw err
      } 
      done()
    })
  })
})
