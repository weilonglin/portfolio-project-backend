"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          full_name: "Betty",
          userName: "Betty66",
          email: "betty@test.com",
          password: "1234",
          address: "pastoorr 2",
          city: "eygelshoven",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Leo",
          userName: "leo77",
          email: "Leo@test.com",
          password: "1234",
          address: "Leo 2",
          city: "eygelshoven",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "test",
          userName: "test",
          email: "test@test.com",
          password: "1234",
          address: "pastoorr 2",
          city: "eygelshoven",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "jojo",
          userName: "jojo33",
          email: "jojo@test.com",
          password: "1234",
          address: "pastoorr 2",
          city: "eygelshoven",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "bo",
          userName: "bo12",
          email: "bo12@test.com",
          password: "1234",
          address: "pastoorr 2",
          city: "eygelshoven",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
