DROP DATABASE IF EXISTS grocerylist_db;

CREATE DATABASE grocerylist_db;

USE grocerylist_db;

CREATE TABLE groceries (
    id INT NOT NULL AUTO_INCREMENT,
    food VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    purchased BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);