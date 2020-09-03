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
    dogLike: [JoinTableLike]
    userLike: [JoinTableLike]
  }

  type Dog {
    id: Int
    name: String
    gender: String
    imageUrl: String
    tagLine: String
    owner: User
    tag: [Tag]
  }

  type Tag {
    id: Int
    name: String
  }

  type JoinTableTag {
    id: Int
    tagId: Int
    dogId: Int
    tagName: [Tag]
  }

  type JoinTableLike {
    id: Int
    liked: Boolean
    userId: Int
    dogId: Int
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
    joinTableLike(id: Int!): JoinTableLike
    tag(id: Int): Tag
    joinTableTag(id: Int): JoinTableTag
  }
`;

module.exports = typeDefs;
