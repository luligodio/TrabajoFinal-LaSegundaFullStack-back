'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkInsert('Rols', [{
                    name: 'User',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }, {
                    name: 'Cliente',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }, {
                    name: 'Admin',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }

            ], ),
        ]);
    },


    async down(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkDelete('Rols', null, {}),
        ]);
    }

};