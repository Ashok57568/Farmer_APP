const express = require('express');
const mysql = require('mysql');
const app = express();

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Enter your MySQL password here
    database: 'farmer_market_db' // Update to your actual database name
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Route to handle signup form submission
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    connection.query(sql, [username, email, password], (error, results) => {
        if (error) {
            console.error('Error executing SQL query: ' + error.stack);
            return res.status(500).send('Internal Server Error');
        }
        res.send('User signed up successfully');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
