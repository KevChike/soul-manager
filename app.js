require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/app");
const db = require("./database/connection");

const app = express();
app.use(bodyParser.json());

// Attempt connecting to database
db.connect(err => {
	if (err) throw err;

	console.log("Database connection established!");

	//Start server
	app.listen(config.port, () => {
		console.log(`Server running on port ${config.port}`);
	});
});

require("./routes/console")(app);
require("./routes/api")(app);
require("./routes/web")(app);
