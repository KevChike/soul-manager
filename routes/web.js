module.exports = app => {
	app.get("/", (req, res) => {
		res.send("You are welcome to our web app!");
	});

	// Handle 404 error
	app.get("*", (req, res) => {
		res.status(404).send("Page not found!");
	});
};
