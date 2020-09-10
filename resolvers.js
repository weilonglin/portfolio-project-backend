const { chatMessage } = require("./models/chatmessage");
const joinTableLike = require("./models/joinTableLike");
const jointabletag = require("./models/jointabletag");
const tag = require("./models/tag");
const { user } = require("./models");
const { PubSub, UserInputError, withFilter } = require("apollo-server");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config/secret");
const { Op } = require("sequelize");
const pubsub = new PubSub();
const subscribers = [];
const onMessagesUpdates = (fn) => subscribers.push(fn);

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.user.findByPk(id);
    },
    async allUsers(root, { id }, { models }) {
      return models.user.findAll();
    },

    async dog(root, { id }, { models }) {
      return models.dog.findByPk(id);
    },
    async allDogs(root, { id }, { models }) {
      return models.dog.findAll({
        where: {
          ownerId: id,
        },
      });
    },
    async chatMessage(root, { id }, { models }) {
      return models.chatMessage.findAll({
        where: {
          [Op.or]: [{ userId: id }, { recipientId: id }],
        },

        order: [["createdAt", "ASC"]],
      });
    },

    async joinTableLike(root, { id }, { models }) {
      return models.joinTableLike.findBy();
    },
    async joinTableTag(root, { id }, { models }) {
      return models.joinTableTag.findBy();
    },
    login: async (_, args, { models }) => {
      const { userName, password } = args;
      let errors = {};

      try {
        if (userName.trim() === "")
          errors.userName = "username must not be empty";
        if (password === "") errors.password = "password must not be empty";

        if (Object.keys(errors).length > 0) {
          throw new UserInputError("bad input", { errors });
        }

        const user = await models.user.findOne({
          where: { userName },
        });

        if (!user) {
          errors.userName = "user not found";
          throw new UserInputError("user not found", { errors });
        }

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) {
          errors.password = "password is incorrect";
          throw new UserInputError("password is incorrect", { errors });
        }
        const id = user.id;

        const token = jwt.sign({ id }, JWT_SECRET, {
          expiresIn: 60 * 600,
        });

        return {
          ...user.toJSON(),
          createdAt: user.createdAt.toISOString(),
          token,
        };
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },

  Mutation: {
    sendMessage: async (
      parent,
      {
        userId,
        message,
        recipientName,
        recipientId,
        imageUrl,
        imageUrlRecipient,
      },
      { models }
    ) => {
      try {
        const id = models.chatMessage.length;

        const Message = await models.chatMessage.create({
          id,
          userId,
          message,
          recipientName,
          recipientId,
          imageUrl,
          imageUrlRecipient,
        });

        subscribers.forEach((fn) => fn());
        pubsub.publish("chatMessage", {
          id,
          userId,
          chatMessage: Message,
          recipientName,
          recipientId,
          imageUrl,
          imageUrlRecipient,
        });
        return Message;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    register: async (_, args, { models }) => {
      let {
        full_name,
        userName,
        email,
        password,
        address,
        city,
        imageUrl,
      } = args;
      let errors = {};

      try {
        // Validate input data
        if (full_name.trim() === "")
          errors.full_name = "full_name must not be empty";
        if (email.trim() === "") errors.email = "email must not be empty";
        if (userName.trim() === "")
          errors.userName = "username must not be empty";
        if (password.trim() === "")
          errors.password = "password must not be empty";
        if (address.trim() === "") errors.address = "address must not be empty";
        if (city.trim() === "") errors.city = "city must not be empty";

        password = await bcrypt.hash(password, 6);

        const user = await models.user.create({
          full_name,
          userName,
          email,
          password,
          address,
          city,
          imageUrl,
        });

        // Return user
        return user;
      } catch (err) {
        console.log(err);
        if (err.userName === "SequelizeUniqueConstraintError") {
          err.errors.forEach(
            (e) => (errors[e.path] = `${e.path} is already taken`)
          );
        } else if (err.userName === "SequelizeValidationError") {
          err.errors.forEach((e) => (errors[e.path] = e.message));
        }
        throw new UserInputError("Bad input", { errors });
      }
    },
    registerDog: async (_, args, { models }) => {
      let { name, gender, imageUrl, tagLine, ownerId } = args;
      let errors = {};

      try {
        if (name.trim() === "") errors.name = "name must not be empty";
        if (gender.trim() === "") errors.gender = "gender must not be empty";
        if (imageUrl.trim() === "")
          errors.imageUrl = "imageUrl must not be empty";
        if (tagLine.trim() === "") errors.tagLine = "tagLine must not be empty";

        const dog = await models.dog.create({
          name,
          gender,
          imageUrl,
          tagLine,
          ownerId,
        });

        // Return user
        return dog;
      } catch (err) {
        console.log(err);
      }
    },
  },

  Subscription: {
    chatMessage: {
      subscribe: withFilter(
        () => pubsub.asyncIterator("chatMessage"),
        (payload, args) =>
          payload.userId === args.userId || payload.recipientId === args.userId
      ),
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
