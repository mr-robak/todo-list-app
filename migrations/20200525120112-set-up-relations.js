"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("TodoLists", "UserId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("TodoItems", "TodoListId", {
      type: Sequelize.INTEGER,
      references: {
        model: "TodoLists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  /* Creating an association will add a foreign key constraint to the attributes. All associations use CASCADE on update and SET NULL on delete, except for n:m (belongsToMany()), which also uses CASCADE on delete.
   */

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("TodoLists", "UserId");
    await queryInterface.removeColumn("TodoItems", "TodoListId");
  },
};
