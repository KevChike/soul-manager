const db = require("../../database/connection");
const User = require("../models/User");
const moment = require("moment");

let date = moment();

module.exports = {
	store(req, res) {
		User.attributes = { ...req.body };
		User.attributes.uid = new Date().getTime();
		User.attributes.created_at = date.format("YYYY-MM-DD HH:mm:ss");
		User.attributes.updated_at = date.format("YYYY-MM-DD HH:mm:ss");

		let sql = `INSERT INTO ${User.tableName} SET ?`;

		db.query(sql, User.attributes, (err, result) => {
			if (err) throw err;

			res.status(200).json({
				data: [User.attributes]
			});
		});
	},

	all(req, res) {
		let sql = `SELECT * FROM ${User.tableName}`;
		db.query(sql, (err, results) => {
			if (err) throw err;

			results.map(function(items) {
				delete items.password;
				delete items.id;
				return items;
			});

			res.status(200).json({
				data: results
			});
		});
	},

	single(req, res) {
		let sql = `SELECT * FROM ${User.tableName} WHERE uid = ${req.params.uid}`;
		db.query(sql, (err, result) => {
			try {
				if (err) throw err;

				delete result[0].id;
				delete result[0].password;

				res.status(200).json({
					data: result
				});
			} catch (error) {
				res.status(404).json({
					error: "Record not found"
				});
			}
		});
	},

	update(req, res) {
		let data = req.body;

		User.attributes = { ...data };
		delete User.attributes.uid;
		delete User.attributes.created_at;
		User.attributes.updated_at = date.format("YYYY-MM-DD HH:mm:ss");

		let sql = `UPDATE ${User.tableName} SET ? WHERE uid = ${req.params.uid}`;
		db.query(sql, User.attributes, (err, result) => {
			try {
				if (err) throw err;

				if (result.affectedRows > 0) {
					res.status(200).json({
						data: [User.attributes]
					});
				} else {
					res.status(404).json({
						error: "Record not found"
					});
				}
			} catch (error) {
				res.json({
					error: "Something went wrong!"
				});
			}
		});
	},

	delete(req, res) {
		let sql = `DELETE FROM ${User.tableName} WHERE uid = ${req.params.uid}`;
		db.query(sql, (err, result) => {
			if (result.affectedRows > 0) {
				res.status(200).json({
					message: "Record deleted!"
				});
			} else {
				res.status(404).json({
					error: "Record not found"
				});
			}
		});
	}
};
