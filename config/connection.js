const mysql = require('mysql');
const express = require ('express');
const exphbs = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 8080;
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

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
