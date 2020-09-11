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
          imageUrl:
            "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_1000,h_743,c_limit/best-face-oil.png",

          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          recipientId: 3,
          recipientName: "test",
          message: "Hello, this is a test",
          imageUrl:
            "https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg",

          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          recipientId: 4,
          recipientName: "jojo33",
          message: "Hello, this is a test",
          imageUrl:
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/85e3b8b43f314661a942abca00920ade_9366/Face_Covers_M_L_3_Pack_Blue_H32391_21_model.jpg",

          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          recipientId: 5,
          recipientName: "bo12",
          message: "Hello, this is a test",
          imageUrl:
            "https://www.bioid.com/wp-content/uploads/face-database-bioid.jpg",

          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          recipientId: 1,
          recipientName: "Betty66",
          message: "Hello, this is a test",
          imageUrl:
            "https://focusmagazine.nl/wp-content/uploads/2020/05/focusmagazine-williamrutten-JohanDerksen.jpg",

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
