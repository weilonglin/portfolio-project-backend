const { ApolloServer, gql } = require("apollo-server-express");
const { createServer } = require("http");
const express = require("express");
const app = express();
const PORT = 4000;
const corsMiddleWare = require("cors");
const models = require("./models");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
// const ws = require("ws");
// const { WebSocketLink } = require("@apollo/client/link/ws");
const { PubSub } = require("apollo-server");

const httpServer = createServer(app);

const pubsub = new PubSub();
app.use(express.json());

app.use(corsMiddleWare());

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:4000/graphql`,
//   options: {
//     reconnect: true,
//   },
//   webSocketImpl: ws,
// });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models, pubsub },
});

server.applyMiddleware({ app });
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
