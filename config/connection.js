const mysql = require('mysql');



var connection =  mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 3307,
    user: "root",
    password: "root",
    database: "burgers_db"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log(connection.state)
});

module.exports = connection;
