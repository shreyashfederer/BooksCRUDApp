const connectionPool = require('pg').Pool

const pool = new connectionPool({

  user: 'me',
  host: 'localhost',
  database: 'booksinfo',
  password: process.env.bookspassword,
  port: 5432,

})

module.exports = {
    pool
}