"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "joinTableTags",
      [
        {
          tagId: 1,
          dogId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          dogId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          dogId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 3,
          dogId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 10,
          dogId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 9,
          dogId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 4,
          dogId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          dogId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          dogId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 11,
          dogId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          dogId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 9,
          dogId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          dogId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 6,
          dogId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 10,
          dogId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("joinTableTags", null, {});
  },
};
