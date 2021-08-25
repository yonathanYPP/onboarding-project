'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Clients', [{
      name: 'web',
      clientId: 'xgKJ0YhSsgdyz2hP',
      clientSecret: 'CoeGpie6MBuOjlo6',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'android',
      clientId: '3rfSYfuxReZdHHdH',
      clientSecret: 'tLsiOBT9M0HrpH1P',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
