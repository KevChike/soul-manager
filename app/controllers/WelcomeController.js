module.exports = {
	home(req, res) {
		res.status(200).json({
			message: "Welcome! This is the version 1 of our API."
		});
	},
	status(req, res) {
		res.status(200).json({
			message: "OK!"
		});
	}
};
