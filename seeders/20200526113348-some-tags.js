"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Tags", [
      { title: "home", createdAt: new Date(), updatedAt: new Date() },
      { title: "sport", createdAt: new Date(), updatedAt: new Date() },
      { title: "groceries", createdAt: new Date(), updatedAt: new Date() },
      { title: "work", createdAt: new Date(), updatedAt: new Date() },
      { title: "health", createdAt: new Date(), updatedAt: new Date() },
      { title: "weekend", createdAt: new Date(), updatedAt: new Date() },
      { title: "weekday", createdAt: new Date(), updatedAt: new Date() },
      { title: "fun", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
