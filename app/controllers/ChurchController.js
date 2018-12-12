const db = require("../../database/connection");
const Church = require("../models/Church");
const moment = require("moment");

let date = moment();

module.exports = {
	store(req, res) {
		Church.attributes = { ...req.body };
		Church.attributes.uid = new Date().getTime();
		Church.attributes.created_at = date.format("YYYY-MM-DD HH:mm:ss");
		Church.attributes.updated_at = date.format("YYYY-MM-DD HH:mm:ss");

		let sql = `INSERT INTO ${Church.tableName} SET ?`;

		db.query(sql, Church.attributes, (err, result) => {
			if (err) throw err;

			res.status(200).json({
				data: [Church.attributes]
			});
		});
	},

	all(req, res) {
		let sql = `SELECT * FROM ${Church.tableName}`;
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
		let sql = `SELECT * FROM ${Church.tableName} WHERE uid = ${req.params.uid}`;
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

		Church.attributes = { ...data };
		delete Church.attributes.uid;
		delete Church.attributes.created_at;
		Church.attributes.updated_at = date.format("YYYY-MM-DD HH:mm:ss");

		let sql = `UPDATE ${Church.tableName} SET ? WHERE uid = ${req.params.uid}`;
		db.query(sql, Church.attributes, (err, result) => {
			try {
				if (err) throw err;

				if (result.affectedRows > 0) {
					res.status(200).json({
						data: [Church.attributes]
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
		let sql = `DELETE FROM ${Church.tableName} WHERE uid = ${req.params.uid}`;
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
