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
     await queryInterface.bulkInsert('quotes', [{
      quote: 'Today is a great day!',
      week_day: 'Saturday',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    quote: 'Tomorrow will always be better!',
    week_day: 'Saturday',
    createdAt: new Date(),
    updatedAt: new Date()
},
{
  quote: 'Great Quotes!',
  week_day: 'Saturday',
  createdAt: new Date(),
  updatedAt: new Date()
}], {});
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
