DROP DATABASE if EXISTS contactdb;

CREATE DATABASE contactdb;

USE contactdb;

CREATE TABLE contact (
	id_contact INT(10) NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(200) NOT NULL DEFAULT '',
	phone VARCHAR(15) NOT NULL DEFAULT '',
	email VARCHAR(100) NOT NULL DEFAULT '',
	birth_date DATE NULL,
	deleted ENUM('true','false') NULL DEFAULT 'false',
	PRIMARY KEY (id_contact)
)ENGINE=InnoDB
COMMENT='table for storing contact information'
;