"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ItemTags",
      [
        {
          TodoItemId: 1,
          TagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TodoItemId: 1,
          TagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TodoItemId: 2,
          TagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TodoItemId: 5,
          TagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ItemTags", null, {});
  },
};
