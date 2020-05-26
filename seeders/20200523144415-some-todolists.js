"use strict";
// const User = require("../models").User;
// const { Op } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const marcin = await User.findOne({
    //   where: { name: "Marcin Robak" },
    //   // same as: where: { [Op.eq]: "Marcin Robak" },
    // });

    // const leo = await User.findOne({
    //   where: { [Op.eq]: "Leo Messi" },
    // });

    return await queryInterface.bulkInsert(
      "TodoLists",
      [
        {
          name: "Marcin's Work list",
          createdAt: new Date(),
          updatedAt: new Date(),
          // userId: marcin.id,
          userId: 1,
        },
        {
          name: "Marcin's Personal list",
          createdAt: new Date(),
          updatedAt: new Date(),
          // userId: marcin.id,
          userId: 1,
        },
        {
          name: "Leo's futbol list",
          createdAt: new Date(),
          updatedAt: new Date(),
          // userId: leo.id,
          userId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("TodoLists", null, {});
  },
};
