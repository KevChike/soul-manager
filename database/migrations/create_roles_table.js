const db = require("../connection");

module.exports = {
	create() {
		let sql = `CREATE TABLE roles(
				id int(10) UNSIGNED NOT NULL AUTO_INCREMENT, 
				uid varchar(255) COLLATE utf8_unicode_ci NOT NULL, 
				name varchar(255) COLLATE utf8_unicode_ci NOT NULL, 
				slug varchar(255) COLLATE utf8_unicode_ci NOT NULL, 
				created_at timestamp NULL,
  			updated_at timestamp NULL,
				PRIMARY KEY (id),
				UNIQUE KEY (uid))`;

		db.query(sql, (err, result) => {
			if (err) throw err;

			console.log("roles table created!");
		});
	}
};
