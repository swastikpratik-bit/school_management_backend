CREATE DATABASE school_management;
USE school_management;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);

INSERT INTO schools (name, address, latitude, longitude)
VALUES 
('Greenwood High', '123 Elm St', 12.9716, 77.5946),
('Bluebell School', '456 Oak St', 13.0827, 80.2707);

