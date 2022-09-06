'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.bulkInsert('categories',[
        {
          title: 'Contenido general',
          created_by: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Valores de la bolsa',
          created_by: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Fama',
          created_by: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}),
    ]);
  },

  async down (queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.bulkDelete('categories', null, {}),
    ]);
  }
};

