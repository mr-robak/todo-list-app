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
    TodoList.belongsTo(models.User);
    TodoList.hasMany(models.TodoItem);
    // associations can be defined here
  };

  return TodoList;
};
