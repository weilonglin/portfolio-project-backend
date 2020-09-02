"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          name: "cute",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "big",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "small",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "kids",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "long walks",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "good with everyone",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "crazy",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "listens",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "good with other dogs",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "male",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "female",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
