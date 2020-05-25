"use strict";
module.exports = (sequelize, DataTypes) => {
  const TodoList = sequelize.define(
    "TodoList",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  TodoList.associate = function (models) {
    todoList.belongsTo(models.User);
    // associations can be defined here
  };
  return TodoList;
};
