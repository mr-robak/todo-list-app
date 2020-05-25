"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      phone: DataTypes.INTEGER,
    },
    {}
  );
  User.associate = function (models) {
    user.hasMany(models.TodoList);
    // associations can be defined here
  };
  return User;
};
