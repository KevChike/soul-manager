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
	},

	all(req, res) {
		let sql = `SELECT * FROM ${Role.tableName}`;
		db.query(sql, (err, results) => {
			if (err) throw err;

			results.map(function(items) {
				delete items.id;
				return items;
			});

			res.status(200).json({
				data: results
			});
		});
	},

	single(req, res) {
		let sql = `SELECT * FROM ${Role.tableName} WHERE uid = ${req.params.uid}`;
		db.query(sql, (err, result) => {
			try {
				if (err) throw err;

				delete result[0].id;
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

		Role.attributes = { ...data };
		delete Role.attributes.uid;
		delete Role.attributes.created_at;
		Role.attributes.updated_at = date.format("YYYY-MM-DD HH:mm:ss");

		let sql = `UPDATE ${Role.tableName} SET ? WHERE uid = ${req.params.uid}`;
		db.query(sql, Role.attributes, (err, result) => {
			try {
				if (err) throw err;

				if (result.affectedRows > 0) {
					res.status(200).json({
						data: [Role.attributes]
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
		let sql = `DELETE FROM ${Role.tableName} WHERE uid = ${req.params.uid}`;
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
