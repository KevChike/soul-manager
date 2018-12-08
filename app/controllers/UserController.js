const db = require("../../database/connection");
const User = require("../models/User");

module.exports = {
	store(req, res) {
		User.attributes = { ...req.body };
		User.attributes.password = new Date().getTime();

		let sql = "INSERT INTO " + User.tableName + " SET ?";

		db.query(sql, User.attributes, (err, result) => {
			if (err) throw err;

			res.status(200).json({
				data: [
					{
						name: req.body.name,
						email: req.body.email
					}
				]
			});
		});
	}
};
