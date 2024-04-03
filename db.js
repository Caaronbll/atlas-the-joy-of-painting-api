const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api_tutorial',
  password: 'your_password',
  port: 5431,
});
 
module.exports = pool;