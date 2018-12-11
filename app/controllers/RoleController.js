const db = require("../../database/connection");
const Role = require("../models/Role");
const moment = require("moment");

let date = moment();

module.exports = {
	store(req, res) {
		Role.attributes = { ...req.body };
		Role.attributes.uid = new Date().getTime();
		Role.attributes.created_at = date.format("YYYY-MM-DD HH:mm:ss");
		Role.attributes.updated_at = date.format("YYYY-MM-DD HH:mm:ss");

		let sql = `INSERT INTO ${Role.tableName} SET ?`;

		db.query(sql, Role.attributes, (err, result) => {
			if (err) throw err;

			res.status(200).json({
				data: [Role.attributes]
			});
		});
	}
};
