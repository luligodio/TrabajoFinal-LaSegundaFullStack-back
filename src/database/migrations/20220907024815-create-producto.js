'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Productos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            precio: {
                type: Sequelize.INTEGER
            },
            stock: {
                type: Sequelize.STRING
            },
            fecha: {
                type: Sequelize.STRING
            },
            id_categoria: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Categoria',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onupdate: 'CASCADE'
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
        await queryInterface.dropTable('Productos');
    }
};