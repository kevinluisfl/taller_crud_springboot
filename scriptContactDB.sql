DROP DATABASE if EXISTS contactdb;

CREATE DATABASE contactdb;

USE contactdb;

DROP TABLE IF EXISTS contact;

CREATE TABLE contact (
	id_contact INT(10) NOT NULL AUTO_INCREMENT,
	con_full_name VARCHAR(200) NOT NULL DEFAULT '',
	con_phone VARCHAR(15) NOT NULL DEFAULT '',
	con_email VARCHAR(100) NOT NULL DEFAULT '',
	con_birth_date DATE NULL,
	con_deleted ENUM('true','false') NULL DEFAULT 'false',
	PRIMARY KEY (id_contact)
)ENGINE=InnoDB
COMMENT='table for storing contact information'
;