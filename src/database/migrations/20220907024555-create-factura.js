'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Facturas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_header: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Header',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onupdate: 'CASCADE'
            },
            id_producto: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Producto',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onupdate: 'CASCADE'
            },
            cantidad: {
                type: Sequelize.STRING
            },
            fecha: {
                type: Sequelize.STRING
            },
            precio: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Facturas');
    }
};