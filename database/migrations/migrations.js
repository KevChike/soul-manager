const churches = require("./create_churches_table");
const roles = require("./create_roles_table");
const users = require("./create_users_table");
const newMembers = require("./create_new_members_table");

module.exports = {
	run(req, res) {
		//Create tables
		churches.create();
		roles.create();
		users.create();
		newMembers.create();

		//Create contraints on tables
		users.alter();
		newMembers.alter();

		res.status(200).send("Database migration completed!");
	}
};
