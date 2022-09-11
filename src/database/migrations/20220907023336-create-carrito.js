'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Carrito', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_user: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'User',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onupdate: 'CASCADE'
            },
            fecha: {
                type: Sequelize.STRING
            },
            id_mesa: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Mesa',
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
        await queryInterface.dropTable('Carrito');
    }
};