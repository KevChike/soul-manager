const churches = require("./create_churches_table");

module.exports = {
	run(req, res) {
		churches.up();
		res.status(200).send("Database migration completed!");
	}
};
