'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Header extends Model {
        static associate(models) {
            Header.hasMany(models.Factura, { foreignKey: 'id_header' })
                /*Header.belongsTo(models.Mesa, { foreignKey: 'id', target_key: 'id_mesa' })*/
        }
    }
    Header.init({
        name: DataTypes.STRING,
        id_user: DataTypes.INTEGER,
        ubicacion: DataTypes.STRING,
        fecha: DataTypes.STRING,
        id_mesa: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Header',
    });
    return Header;
};