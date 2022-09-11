'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Carrito extends Model {
        static associate(models) {}
    }
    Carrito.init({
        id_user: DataTypes.INTEGER,
        fecha: DataTypes.STRING,
        id_mesa: DataTypes.INTEGER,
        id_producto: DataTypes.INTEGER,
        cantidad: DataTypes.STRING,
        precio: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Carrito',
    });
    return Carrito;
};