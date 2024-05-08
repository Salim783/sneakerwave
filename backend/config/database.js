const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'CDAProject',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 8000
});

module.exports = pool.promise();
