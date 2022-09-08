'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Factura extends Model {
        static associate(models) {
            /*Factura.belongsTo(models.Producto, { foreignKey: 'id', target_key: 'id_producto' })
            Factura.belongsTo(models.Header, { foreignKey: 'id', target_key: 'id_header' })*/
        }
    }
    Factura.init({
        id_header: DataTypes.INTEGER,
        id_producto: DataTypes.INTEGER,
        cantidad: DataTypes.STRING,
        precio: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Factura',
    });
    return Factura;
};