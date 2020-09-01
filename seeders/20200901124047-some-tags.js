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
          dogId: 1,
        },
        {
          name: "big",

          createdAt: new Date(),
          updatedAt: new Date(),
          dogId: 2,
        },
        {
          name: "small",

          createdAt: new Date(),
          updatedAt: new Date(),
          dogId: 3,
        },
        {
          name: "kids",

          createdAt: new Date(),
          updatedAt: new Date(),
          dogId: 4,
        },
        {
          name: "long walks",

          createdAt: new Date(),
          updatedAt: new Date(),
          dogId: 5,
        },
        {
          name: "good with everyone",

          createdAt: new Date(),
          updatedAt: new Date(),
          dogId: 1,
        },
        {
          name: "crazy",

          createdAt: new Date(),
          updatedAt: new Date(),
          dogId: 2,
        },
        {
          name: "listens",

          createdAt: new Date(),
          updatedAt: new Date(),
          dogId: 3,
        },
        {
          name: "good with other dogs",

          createdAt: new Date(),
          updatedAt: new Date(),
          dogId: 4,
        },
        {
          name: "male",

          createdAt: new Date(),
          updatedAt: new Date(),
          dogId: 5,
        },
        {
          name: "female",

          createdAt: new Date(),
          updatedAt: new Date(),
          dogId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
