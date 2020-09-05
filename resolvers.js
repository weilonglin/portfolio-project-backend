const { chatMessage } = require("./models/chatmessage");
const joinTableLike = require("./models/joinTableLike");
const jointabletag = require("./models/jointabletag");
const tag = require("./models/tag");
const { user } = require("./models");
const { PubSub } = require("apollo-server");

const pubsub = new PubSub();
const subscribers = [];
const onMessagesUpdates = (fn) => subscribers.push(fn);

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.user.findByPk(id);
    },
    async dog(root, { id }, { models }) {
      return models.dog.findByPk(id);
    },
    async allDogs(root, { id }, { models }) {
      return models.dog.findAll();
    },
    async chatMessage(root, { id }, { models }) {
      return models.chatMessage.findBy();
    },
    async joinTableLike(root, { id }, { models }) {
      return models.joinTableLike.findBy();
    },
    async joinTableTag(root, { id }, { models }) {
      return models.joinTableTag.findBy();
    },
  },

  Mutation: {
    sendMessage: async (
      parent,
      { userId, message, recipientName, recipientId },
      { models }
    ) => {
      try {
        const id = models.chatMessage.length;
        console.log("id lenht", id);
        const Message = await models.chatMessage.create({
          id,
          userId,
          message,
          recipientName,
          recipientId,
        });
        subscribers.forEach((fn) => fn());
        return Message;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },

  User: {
    async dogs(dog) {
      return dog.getOwner();
    },
    async sender(chatMessage) {
      return chatMessage.getSender();
    },
    async recipient(message) {
      return message.getRecipient();
    },
    async dogLike(dog) {
      return dog.getDogLike();
    },
    async userLike(dog) {
      return dog.getUserLike();
    },

    // async dogLike(user) {
    //   return user.getLikes({ joinTableAttributes: ["liked"] });
    // },
  },
  Dog: {
    async owner(user) {
      return user.getOwner();
    },
    async tag(dog) {
      console.log("dog", dog);
      const x = await dog.getTags();
      console.log("XXXXXXXX", x);
      return x;
    },

    // async userLike(dog) {
    //   const x = await dog.getLikes({ joinTableAttributes: ["liked"] });
    //   console.log("XXXXXXXX", x);
    //   return x;
    // },
  },
};

module.exports = resolvers;
