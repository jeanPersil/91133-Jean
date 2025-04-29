CREATE DATABASE estoque;

USE estoque;

CREATE TABLE produtos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto VARCHAR(100) NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL
)

