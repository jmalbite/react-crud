const mysql = require('mysql');
const databaseConfig = require('../config/database.js');

//create connection to the database
const connection = mysql.createConnection({
  host: databaseConfig.HOST,
  user: databaseConfig.USER,
  password: databaseConfig.PASSWORD,
  database: databaseConfig.DB,
});

//open mysql connection
connection.connect((error) => {
  if (error) throw error;

  console.log('Connected to the database');
});

module.exports = connection;
