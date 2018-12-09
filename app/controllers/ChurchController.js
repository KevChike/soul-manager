const db = require("../../database/connection");
const User = require("../models/Church");
const moment = require("moment");

let date = moment();

module.exports = {
	store(req, res) {
		User.attributes = { ...req.body };
		User.attributes.uid = new Date().getTime();
		User.attributes.created_at = date.format("YYYY-MM-DD HH:mm:ss");
		User.attributes.updated_at = date.format("YYYY-MM-DD HH:mm:ss");

		let sql = "INSERT INTO " + User.tableName + " SET ?";

		db.query(sql, User.attributes, (err, result) => {
			if (err) throw err;

			res.status(200).json({
				data: [User.attributes]
			});
		});
	}
};
