'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkInsert('productos', [{
                name: 'Contenido general',
                precio: 1,
                stock: 150,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            ],),
        ]);
    },

    async down(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkDelete('user', null, {}),
            ]);
    }

};