'use strict';

const { CHARACTER_TABLE, CharactersSchema } = require('../models/characterModel');


module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CHARACTER_TABLE, CharactersSchema);
  },

  async down (queryInterface) {
    await queryInterface.createTable(CHARACTER_TABLE)
  }
};
