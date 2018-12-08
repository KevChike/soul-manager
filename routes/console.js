const migration = require("../database/migrations/migrations");

const prefix = "/console";

module.exports = app => {
	app.get(prefix + "/migrate/database", migration.run);

	// Handle 404 error
	app.get(prefix + "*", (req, res) => {
		res.status(404).send("Command not found!");
	});
};
