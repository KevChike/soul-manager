const WelcomeController = require("../app/controllers/WelcomeController");
const UserController = require("../app/controllers/UserController");
const prefix = "/api/v1";

module.exports = app => {
	app.get(prefix + "/", WelcomeController.home);
	app.get(prefix + "/status", WelcomeController.status);

	app.post(prefix + "/user", UserController.store);

	// Handle 404 error
	app.get(prefix + "*", (req, res) => {
		res.status(404).json({
			message: "Not found!"
		});
	});
};
