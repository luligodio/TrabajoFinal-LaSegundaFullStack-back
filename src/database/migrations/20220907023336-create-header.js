'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('headers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
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
            ubicacion: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('headers');
    }
};