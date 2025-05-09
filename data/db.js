const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'db_movies'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connection to server mysql')
});

module.exports = connection;