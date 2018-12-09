const db = require("../connection");

module.exports = {
	up() {
		let sql = `CREATE TABLE new_members(
				id int(10) UNSIGNED NOT NULL, 
				uid varchar(255) COLLATE utf8_unicode_ci NOT NULL, 
				name varchar(255) COLLATE utf8_unicode_ci NOT NULL, 
				gender varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				occupation varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				marital_status varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				phone varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				address varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				town_of_residence varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				church_id varchar(255) COLLATE utf8_unicode_ci NOT NULL,
				is_first_time tinyint(1) NOT NULL DEFAULT '0',
				is_new_convert tinyint(1) NOT NULL DEFAULT '0',
				is_rededication tinyint(1) NOT NULL DEFAULT '0',
				event varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
				event_date date NULL,
				created_at timestamp NULL,
  			updated_at timestamp NULL,
				PRIMARY KEY (id),
				KEY churches_church_id_foreign (church_id),
				UNIQUE KEY (uid))`;

		db.query(sql, (err, result) => {
			if (err) throw err;

			console.log("new members table created!");
		});
	}
};
