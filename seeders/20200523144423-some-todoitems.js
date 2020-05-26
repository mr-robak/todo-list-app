"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "TodoItems",
      [
        {
          task: "bread",
          deadline: "242",
          createdAt: new Date(),
          updatedAt: new Date(),
          TodoListId: 1,
        },
        {
          task: "milk",
          deadline: "3642",
          createdAt: new Date(),
          updatedAt: new Date(),
          TodoListId: 1,
        },
        {
          task: "beer",
          deadline: "5635242",
          createdAt: new Date(),
          updatedAt: new Date(),
          TodoListId: 1,
        },
        {
          task: "pizza",
          deadline: "4245",
          createdAt: new Date(),
          updatedAt: new Date(),
          TodoListId: 3,
        },
        {
          task: "vacuum",
          deadline: "2452245",
          createdAt: new Date(),
          updatedAt: new Date(),
          TodoListId: 2,
        },
        {
          task: "repair table",
          deadline: "35635",
          TodoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "water plants",
          deadline: "3563",
          createdAt: new Date(),
          TodoListId: 3,
          updatedAt: new Date(),
        },
        {
          task: "review redux",
          deadline: "356",
          createdAt: new Date(),
          TodoListId: 2,
          updatedAt: new Date(),
        },
        {
          task: "watch sql video",
          deadline: "35635",
          createdAt: new Date(),
          TodoListId: 3,
          updatedAt: new Date(),
        },
        {
          task: "fix data fetching",
          deadline: "3563",
          createdAt: new Date(),
          TodoListId: 1,
          updatedAt: new Date(),
        },
        {
          task: "clean bathroom",
          deadline: "356",
          createdAt: new Date(),
          TodoListId: 1,
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TodoItems", null, {});
  },
};
