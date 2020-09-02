const chatmessage = require("./models/chatmessage");

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.user.findByPk(id);
    },
    async dog(root, { id }, { models }) {
      return models.dog.findByPk(id);
    },
    async chatMessage(root, { id }, { models }) {
      return models.chatMessage.findBy();
    },
  },
  User: {
    async dogs(dog) {
      return dog.getOwner();
    },
    async sender(chatMessage) {
      console.log("do i get here");
      return chatMessage.getSender();
    },
    async recipient(message) {
      return message.getRecipient();
    },
  },
  Dog: {
    async owner(user) {
      return user.getOwner();
    },
  },
};

module.exports = resolvers;
