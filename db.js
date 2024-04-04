const { Client } = require('pg');

const client = new Client({
  user: 'ab',
  host: 'localhost',
  database: 'postgres',
  password: 'itsme',
  port: 5432,
});

// check connection
client
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  });

module.exports = client;