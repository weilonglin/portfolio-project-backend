"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("dogs", "owner", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "dogs",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("dogs", "owner");
  },
};
