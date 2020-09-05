"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "chatMessages",
      [
        {
          recipientId: 2,
          recipientName: "leo77",
          message: "Hello, this is a test",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          recipientId: 3,
          recipientName: "test",
          message: "Hello, this is a test",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          recipientId: 4,
          recipientName: "jojo33",
          message: "Hello, this is a test",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          recipientId: 5,
          recipientName: "bo12",
          message: "Hello, this is a test",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          recipientId: 1,
          recipientName: "Betty66",
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
