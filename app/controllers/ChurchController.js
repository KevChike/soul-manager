const db = require("../../database/connection");
const User = require("../models/Church");
const moment = require("moment");

let date = moment();

module.exports = {
	store(req, res) {
		User.attributes = { ...req.body };
		User.attributes.uid = new Date().getTime();
		User.attributes.created_at = new Date().getTime();
		User.attributes.updated_at = new Date().getTime();

		let sql = "INSERT INTO " + User.tableName + " SET ?";

		db.query(sql, User.attributes, (err, result) => {
			if (err) throw err;

			res.status(200).json({
				data: [
					{
						name: req.body.name,
						phone: req.body.phone,
						address: req.body.address,
						town: req.body.town,
						lga: req.body.lga,
						state: req.body.state,
						country: req.body.country,
						resident_pastor: req.body.resident_pastor
					}
				]
			});
		});
	},
	test() {
		console.log(date.toDate());
	}
};
