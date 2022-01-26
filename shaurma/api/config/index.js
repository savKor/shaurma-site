// src / config / index.js
'use strict'

const config = {
  port: 5001,
  secret: 'super-secret-key',
  databaseUrl: 'mongodb://localhost:27017/shaurmadb',
  saltRounds: 10
}

module.exports = config
