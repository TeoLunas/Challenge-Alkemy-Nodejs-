'use strict';
const { CATEGORY_TABLE, CategorySchema} = require('../models/categoryModel');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE)
  }
};
