const churches = require("./create_churches_table");
const users = require("./create_users_table");

module.exports = {
	run(req, res) {
		churches.up();
		users.up();

		res.status(200).send("Database migration completed!");
	}
};
