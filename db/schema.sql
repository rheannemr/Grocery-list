DROP DATABASE IF EXISTS grocerylist_db;

CREATE DATABASE grocerylist_db;

USE grocerylist_db;

CREATE TABLE groceries (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    inFridge BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);