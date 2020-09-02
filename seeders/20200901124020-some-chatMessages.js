"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "chatMessages",
      [
        {
          recipientId: 2,
          message: "Hello, this is a test",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          recipientId: 3,
          message: "Hello, this is a test",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          recipientId: 4,
          message: "Hello, this is a test",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          recipientId: 5,
          message: "Hello, this is a test",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          recipientId: 1,
          message: "Hello, this is a test",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("chatMessages", null, {});
  },
};
