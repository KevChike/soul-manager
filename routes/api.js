const WelcomeController = require("../app/controllers/WelcomeController");
const UserController = require("../app/controllers/UserController");
const ChurchController = require("../app/controllers/ChurchController");
const prefix = "/api/v1";

module.exports = app => {
	app.get(prefix + "/", WelcomeController.home);
	app.get(prefix + "/status", WelcomeController.status);

	app.post(prefix + "/user", UserController.store);

	//Churches
	app.post(prefix + "/church", ChurchController.store);

	// Handle 404 error
	app.get(prefix + "*", (req, res) => {
		res.status(404).json({
			message: "Not found!"
		});
	});
};
