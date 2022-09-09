'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkInsert('categoria', [{
                    name: 'hamburguesas',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'picadas',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'pizzas',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'postres',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'bebidas sin alcohol',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'vinos',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'tragos',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'whiskys',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'cervezas',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }


            ], ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkDelete('categoria', null, {}),
        ]);
    }
};