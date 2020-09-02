const { ApolloServer, gql } = require("apollo-server-express");

const express = require("express");
const app = express();
const PORT = 4000;
const corsMiddleWare = require("cors");
const models = require("./models");
const User = require("./models").user;
const Dog = require("./models").dog;
const Chat = require("./models").chatMessage;
const Tag = require("./models").tag;

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

app.use(express.json());

app.use(corsMiddleWare());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

server.applyMiddleware({ app });

app.get("/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = await User.findByPk(userId, {
    include: [
      {
        model: Dog,
        as: "owner",
        include: [
          {
            model: Tag,
            as: "tagName",
            attributes: ["name", "id"],
          },
        ],
      },
      { model: Chat, as: "sender" },
    ],
  });

  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});

app.get("/chat/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = await User.findByPk(userId, {
    include: [{ model: Chat, as: "recipient" }],
  });

  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
