// users.js

const express = require('express');
const router = express.Router();
const pool = require('./db');

// Define routes
router.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            console.error('Error executing query: ' + error.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});

// Add more routes for CRUD operations

module.exports = router;
