"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "dogs",
      [
        {
          name: "NerdyBoii",
          gender: "male",
          imageUrl:
            "https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_1005/master/969.jpg?width=700&quality=85&auto=format&fit=max&s=470657ebd2a0e704df88997d393aea15",
          tagLine: "Good boy, always and ever.",
          createdAt: new Date(),
          updatedAt: new Date(),
          ownerId: 1,
        },
        {
          name: "Goldy",
          gender: "male",
          imageUrl:
            "https://cdn.webshopapp.com/shops/252222/files/165322031/750x650x2/muursticker-golden-retriever-puppy-34-x-43-cm.jpg",
          tagLine: "Blonde, fit and need food",
          createdAt: new Date(),
          updatedAt: new Date(),
          ownerId: 2,
        },
        {
          name: "Wouf",
          gender: "male",
          imageUrl:
            "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.ngsversion.1546554600360.adapt.1900.1.jpg",
          tagLine: "Smmmooooooooooooooooooooooofh criminal",
          createdAt: new Date(),
          updatedAt: new Date(),
          ownerId: 3,
        },
        {
          name: "Wouf",
          gender: "female",
          imageUrl:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
          tagLine: "Love enjoying the grass and sun",
          createdAt: new Date(),
          updatedAt: new Date(),
          ownerId: 4,
        },
        {
          name: "HikeGurl",
          gender: "female",
          imageUrl:
            "https://www.hondenfun.nl/wp-content/uploads/2019/05/golden-retriever-is-een-slim-hondenras.jpeg",
          tagLine: "I like to walk, spring and be funny",
          createdAt: new Date(),
          updatedAt: new Date(),
          ownerId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("dogs", null, {});
  },
};
