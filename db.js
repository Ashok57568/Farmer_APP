// db.js

const mysql = require('mysql');

// Create connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'farmer_market_db' 
});

module.exports = pool;
