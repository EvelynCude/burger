DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name varchar(100) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);