"use strict";
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define(
    "Tag",
    {
      title: DataTypes.STRING,
    },
    {}
  );

  tag.associate = function (models) {
    tag.belongsToMany(models.TodoItem, {
      // Tag(actual table)  =>  itemTags (join table) => todoItem(actual tables)
      through: "ItemTag",
      foreignKey: "TagId",
    });
    // associations can be defined here
  };
  return tag;
};
