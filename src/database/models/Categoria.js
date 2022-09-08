'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Categoria extends Model {
        static associate(models) {
            Categoria.hasMany(models.Producto, { foreignKey: 'id_categoria' })
        }
    }
    Categoria.init({
        name: DataTypes.STRING,
        descripcion: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Categoria',
    });
    return Categoria;
};