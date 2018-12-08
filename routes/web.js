module.exports = app => {
	app.get("/", (req, res) => {
		res.send("You are welcome to our web app!");
	});
};
