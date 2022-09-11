'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Mesa extends Model {
        static associate(models) {
            Mesa.hasMany(models.Carrito, { foreignKey: 'id_mesa' })
        }
    }
    Mesa.init({
        name: DataTypes.STRING,
        Ubicacion: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Mesa',
    });
    return Mesa;
};