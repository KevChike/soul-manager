const mysql = require("mysql");
const dbConfig = require("../config/database");

// Create database connection
const db = mysql.createConnection({
	host: dbConfig.connections.mysql.host,
	user: dbConfig.connections.mysql.user,
	password: dbConfig.connections.mysql.password,
	database: dbConfig.connections.mysql.database
});

module.exports = db;
