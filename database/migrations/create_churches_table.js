const db = require("../connection");

module.exports = {
	create() {
		let sql = `CREATE TABLE churches(
				id int(10) UNSIGNED NOT NULL AUTO_INCREMENT, 
				uid varchar(255) COLLATE utf8_unicode_ci NOT NULL, 
				name varchar(255) COLLATE utf8_unicode_ci NOT NULL, 
				phone varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				address varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				town varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				lga varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				state varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				country varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				resident_pastor varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				created_at timestamp NULL,
  			updated_at timestamp NULL,
				PRIMARY KEY (id),
				UNIQUE KEY (uid))`;

		db.query(sql, (err, result) => {
			if (err) throw err;

			console.log("churches table created!");
		});
	}
};
