const { ApolloServer, gql } = require("apollo-server-express");
const { createServer } = require("http");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const corsMiddleWare = require("cors");
const models = require("./models");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
// const ws = require("ws");
// const { WebSocketLink } = require("@apollo/client/link/ws");
const { PubSub } = require("apollo-server");
const cors = require("cors");
const pubsub = new PubSub();
const httpServer = createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models, pubsub },
  playground: true,
});

server.applyMiddleware({ app });
app.use(cors());

app.use(express.json());

app.use(corsMiddleWare());

server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
