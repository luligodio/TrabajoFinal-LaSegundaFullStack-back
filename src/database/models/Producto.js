'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Producto extends Model {
        static associate(models) {
            /*Producto.belongsTo(models.Categoria, { foreignKey: 'id', target_key: 'id_categoria' })*/
            Producto.hasMany(models.Factura, { foreignKey: 'id_producto' })
        }
    }
    Producto.init({
        name: DataTypes.STRING,
        ingredientes: DataTypes.STRING,
        precio: DataTypes.INTEGER,
        stock: DataTypes.STRING,
        id_categoria: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Producto',
    });
    return Producto;
};