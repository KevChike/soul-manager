const WelcomeController = require("../app/controllers/WelcomeController");
const UserController = require("../app/controllers/UserController");
const ChurchController = require("../app/controllers/ChurchController");
const RoleController = require("../app/controllers/RoleController");
const prefix = "/api/v1";

module.exports = app => {
	app.get(prefix + "/", WelcomeController.home);
	app.get(prefix + "/status", WelcomeController.status);

	app.post(prefix + "/user", UserController.store);

	//Churches
	app.post(prefix + "/churches", ChurchController.store);
	app.get(prefix + "/churches", ChurchController.all);
	app.get(prefix + "/churches/:uid", ChurchController.single);
	app.patch(prefix + "/churches/:uid", ChurchController.update);
	app.delete(prefix + "/churches/:uid", ChurchController.delete);

	//Roles
	app.post(prefix + "/roles", RoleController.store);
	app.get(prefix + "/roles", RoleController.all);
	app.get(prefix + "/roles/:uid", RoleController.single);
	app.patch(prefix + "/roles/:uid", RoleController.update);
	app.delete(prefix + "/roles/:uid", RoleController.delete);

	// Handle 404 error
	app.get(prefix + "*", (req, res) => {
		res.status(404).json({
			error: "Endpoint not found!"
		});
	});
};
