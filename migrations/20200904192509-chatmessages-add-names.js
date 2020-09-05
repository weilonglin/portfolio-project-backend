"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("chatMessages", "recipientName", {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: "users",
        key: "userName",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("chatMessages", "recipientName");
  },
};
