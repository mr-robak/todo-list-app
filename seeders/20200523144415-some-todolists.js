"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "TodoLists",
      [
        {
          name: "Shopping",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Study",

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Home",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TodoLists", null, {});
  },
};
