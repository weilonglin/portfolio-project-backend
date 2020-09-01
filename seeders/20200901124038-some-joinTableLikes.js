"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "joinTableLikes",
      [
        {
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          dogId: 2,
        },

        {
          liked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          dogId: 3,
        },
        {
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          dogId: 4,
        },
        {
          liked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
          dogId: 5,
        },
        {
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
          dogId: 1,
        },
        {
          liked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          dogId: 2,
        },
        {
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          dogId: 3,
        },
        {
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          dogId: 4,
        },
        {
          liked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
          dogId: 5,
        },
        {
          liked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
          dogId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("joinTableLikes", null, {});
  },
};
