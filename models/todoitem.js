"use strict";
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define(
    "TodoItem",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
    },
    {}
  );
  TodoItem.associate = function (models) {
    TodoItem.belongsTo(models.TodoList);
    TodoItem.belongsToMany(models.Tag, {
      // Tag(actual table)  =>  itemTags (join table) => todoItem(actual tables)
      through: "ItemTag",
      foreignKey: "TodoItemId",
    });

    // associations can be defined here
  };

  return TodoItem;
};
