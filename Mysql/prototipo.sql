CREATE DATABASE Bar_Luna;
USE Bar_Luna;


CREATE TABLE Mesa
(
    id_mesa INTEGER not NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL
);

CREATE TABLE Bebidas_sin
(
    id_bebida INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ingredientes VARCHAR(250) NOT NULL,
    precio INTEGER NOT NULL

);


CREATE TABLE Cervezas
(
    id_cerveza INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ingredientes VARCHAR(250) NOT NULL,
    precio INTEGER NOT NULL

);

CREATE TABLE Hamburguesas
(
    id_hamburguesa INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ingredientes VARCHAR(250) NOT NULL,
    precio INTEGER NOT NULL

);
CREATE TABLE Picadas
(
    id_picada INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ingredientes VARCHAR(250) NOT NULL,
    precio INTEGER NOT NULL

);

CREATE TABLE Pizzas
(
    id_pizza INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ingredientes VARCHAR(250) NOT NULL,
    precio INTEGER NOT NULL

);
CREATE TABLE Postres
(
    id_Postre INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ingredientes VARCHAR(250) NOT NULL,
    precio INTEGER NOT NULL

);
CREATE TABLE Tragos
(
    id_trago INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ingredientes VARCHAR(250) NOT NULL,
    precio INTEGER NOT NULL

);
CREATE TABLE Vinos
(
    id_vino INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ingredientes VARCHAR(250) NOT NULL,
    precio INTEGER NOT NULL

);

CREATE TABLE Whiskys
(
    id_whiskys INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ingredientes VARCHAR(250) NOT NULL,
    precio INTEGER NOT NULL

);

