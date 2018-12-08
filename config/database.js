module.exports = {
	connections: {
		mysql: {
			host: process.env.DB_HOST || "localhost",
			user: process.env.DB_USERNAME || "secret",
			password: process.env.DB_PASSWORD || "secret",
			database: process.env.DB_DATABASE || "secret"
		},
		sqlite: {
			user: process.env.DB_USERNAME || "secret",
			password: process.env.DB_PASSWORD || "secret",
			database: process.env.DB_DATABASE || "secret",
			options: {
				dialect: process.env.DB_DIALECT || "sqlite",
				host: process.env.DB_HOST || "localhost",
				storage: process.env.SQLITE_STORAGE || "../storage/sqlite_db.sqlite"
			}
		}
	}
};
