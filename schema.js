const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int
    full_name: String
    userName: String
    email: String
    password: String
    address: String
    city: String
    dogs: [Dog]
    sender: [ChatMessage]
    recipient: [ChatMessage]
  }

  type Dog {
    id: Int
    name: String
    gender: String
    imageUrl: String
    tagLine: String
    owner: User
  }

  type ChatMessage {
    id: Int
    message: String
    userId: Int
    recipientId: Int
  }

  type Query {
    user(id: Int!): User
    dog(id: Int!): Dog
    chatMessage(id: Int!): ChatMessage
  }
`;

module.exports = typeDefs;
