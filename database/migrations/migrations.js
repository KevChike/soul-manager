const churches = require("./create_churches_table");
const roles = require("./create_roles_table");
const users = require("./create_users_table");
const newMembers = require("./create_new_members_table");

module.exports = {
	run(req, res) {
		churches.up();
		roles.up();
		users.up();
		newMembers.up();

		res.status(200).send("Database migration completed!");
	}
};
