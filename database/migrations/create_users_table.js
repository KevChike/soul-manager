const db = require("../connection");

module.exports = {
	up() {
		let sql = `CREATE TABLE users(
				id int(10) UNSIGNED NOT NULL, 
				uid varchar(255) COLLATE utf8_unicode_ci NOT NULL, 
				name varchar(255) COLLATE utf8_unicode_ci NOT NULL, 
				email varchar(255) COLLATE utf8_unicode_ci NOT NULL,
				phone varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				role_id varchar(255) COLLATE utf8_unicode_ci NOT NULL,
				church_id varchar(255) COLLATE utf8_unicode_ci NOT NULL,
				is_active tinyint(1) NOT NULL DEFAULT '1',
				last_login datetime NULL,
				password varchar(255) COLLATE utf8_unicode_ci NOT NULL,
				created_at timestamp NULL,
  			updated_at timestamp NULL,
				PRIMARY KEY (id),
				KEY churches_church_id_foreign (church_id),
				KEY churches_role_id_foreign (role_id),
				UNIQUE KEY (uid, email))`;

		db.query(sql, (err, result) => {
			if (err) throw err;

			console.log("users table created!");
		});
	}
};
