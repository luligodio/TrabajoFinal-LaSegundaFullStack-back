'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkInsert('Users', [{
                    name: 'nahuel',
                    password: 170195,
                    email: 'nah@dis.com',
                    role: '3',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'luciana',
                    password: 110922,
                    email: 'luc@dis.com',
                    role: '3',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }

            ], ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkDelete('Users', null, {}),
        ]);
    }

};