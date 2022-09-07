CREATE DATABASE Luna;
USE Luna;

CREATE TABLE Mesa
(
    id_mesa INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL
);

CREATE TABLE Usuario
(
    id_user INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    contraseña VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    rol VARCHAR(20) NOT NULL
);

CREATE TABLE Header
(
    id_header INTEGER NOT NULL PRIMARY KEY,
    id_users INTEGER NOT NULL,
    fecha VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL,
    id_mesa INTEGER NOT NULL,
    /*FOREIGN KEY(id_mesa) REFERENCES Mesa(id_mesa)
    FOREIGN KEY(id_user) REFERENCES usuario(id_user)*/
);

CREATE TABLE Factura
(
    id_factura INTEGER NOT NULL PRIMARY KEY,
    id_header INTEGER NOT NULL ,
    id_producto INTEGER NOT NULL,
    cantidad VARCHAR(100) NOT NULL,
    precio VARCHAR(100) NOT NULL,
    /*FOREIGN KEY(id_producto) REFERENCES Producto(id_producto)
    FOREIGN KEY(id_header) REFERENCES header(id_header)*/
);


CREATE TABLE Producto
(
    id_producto INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio INTEGER NOT NULL,
    stock VARCHAR(100) NOT NULL,
    id_categoria INTEGER NOT NULL,
    /*FOREIGN KEY(id_categoria) REFERENCES categoria(id_categoria)*/
);

CREATE TABLE Categoria
(
    id_categoria INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(100) NOT NULL
);

ALTER TABLE Header ADD FOREIGN KEY (id_mesa) REFERENCES Mesa(id_mesa);
ALTER TABLE Header ADD FOREIGN KEY (id_user) REFERENCES usuario(id_user);
ALTER TABLE Factura ADD FOREIGN KEY (id_producto) REFERENCES Producto(id_producto);
ALTER TABLE Factura ADD FOREIGN KEY (id_header) REFERENCES header(id_header);
ALTER TABLE Producto ADD FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria);