'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkInsert('mesas', [{
                    name: '1',
                    ubicacion: 'Entrada',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '2',
                    ubicacion: 'Entrada',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '3',
                    ubicacion: 'Entrada',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '4',
                    ubicacion: 'Entrada',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '5',
                    ubicacion: 'Entrada',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '6',
                    ubicacion: 'Entrada',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '7',
                    ubicacion: 'Entrada',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '8',
                    ubicacion: 'Entrada',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '9',
                    ubicacion: 'Entrada',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '10',
                    ubicacion: 'Entrada',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '11',
                    ubicacion: 'Costado',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '12',
                    ubicacion: 'Costado',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '13',
                    ubicacion: 'Costado',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '14',
                    ubicacion: 'Costado',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '15',
                    ubicacion: 'Costado',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '16',
                    ubicacion: 'Costado',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '17',
                    ubicacion: 'Costado',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '18',
                    ubicacion: 'Costado',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '19',
                    ubicacion: 'Costado',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '20',
                    ubicacion: 'Costado',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '21',
                    ubicacion: 'Patio',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '22',
                    ubicacion: 'Patio',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '23',
                    ubicacion: 'Patio',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '24',
                    ubicacion: 'Patio',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '25',
                    ubicacion: 'Patio',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '26',
                    ubicacion: 'Patio',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '27',
                    ubicacion: 'Patio',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '28',
                    ubicacion: 'Patio',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '29',
                    ubicacion: 'Patio',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '30',
                    ubicacion: 'Patio',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },

            ], ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkDelete('mesas', null, {}),
        ]);
    }
};