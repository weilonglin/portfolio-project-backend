"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          full_name: "Betty",
          userName: "Betty66",
          imageUrl:
            "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_1000,h_743,c_limit/best-face-oil.png",
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
          imageUrl:
            "https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg",
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
          imageUrl:
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/85e3b8b43f314661a942abca00920ade_9366/Face_Covers_M_L_3_Pack_Blue_H32391_21_model.jpg",
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
          imageUrl:
            "https://www.bioid.com/wp-content/uploads/face-database-bioid.jpg",
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
          imageUrl:
            "https://focusmagazine.nl/wp-content/uploads/2020/05/focusmagazine-williamrutten-JohanDerksen.jpg",
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
