const { ApolloServer, gql } = require("apollo-server-express");

const express = require("express");
const app = express();
const PORT = 4000;
const corsMiddleWare = require("cors");
const models = require("./models");

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

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
