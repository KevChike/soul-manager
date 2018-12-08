const db = require("../database/connection");

module.exports = app => {
	app.get("/tables/create/users", (req, res) => {
		let sql =
			"CREATE TABLE users(id int AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))";

		db.query(sql, (err, result) => {
			if (err) {
				throw err;
			}
			console.log(result);

			res.send("User table created!");
		});
	});
};
