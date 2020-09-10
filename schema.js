const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int
    full_name: String
    userName: String
    email: String
    password: String
    imageUrl: String
    address: String
    city: String
    dogs: [Dog]
    sender: [ChatMessage]
    recipient: [ChatMessage]
    dogLike: [JoinTableLike]
    userLike: [JoinTableLike]
    token: String
  }
  type allUsers {
    userName: String

    imageUrl: String
  }
  type getUser {
    id: Int
    full_name: String
    userName: String
    address: String
    city: String
    dogs: [Dog]
    sender: [ChatMessage]
    recipient: [ChatMessage]
    dogLike: [JoinTableLike]
    userLike: [JoinTableLike]
    token: String
    allMessage: ChatMessage
  }
  type Dog {
    id: Int
    name: String
    gender: String
    imageUrl: String
    tagLine: String
    ownerId: String
    owner: User
    tag: [Tag]
  }

  type Tag {
    id: Int
    name: String
    createdAt: Int
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
    imageUrl: String
    imageUrlRecipient: String
    userId: Int
    recipientId: Int
    recipientName: String
    createdAt: String!
  }

  type Query {
    user(id: Int!): User!
    allUsers: [User]
    getUser: [User]!
    dog(id: Int!): Dog
    chatMessage(id: Int!): [ChatMessage]!
    joinTableLike(id: Int!): JoinTableLike
    tag(id: Int): Tag
    joinTableTag(id: Int): JoinTableTag
    allDogs: [Dog]
    allDogsUser(id: Int): [Dog]
    login(userName: String!, password: String!): User!
  }

  type Mutation {
    sendMessage(
      id: Int
      userId: Int!
      message: String!
      imageUrl: String
      recipientId: Int!
      recipientName: String!
    ): ChatMessage
    register(
      id: Int
      full_name: String!
      userName: String!
      email: String!
      password: String!
      address: String!
      city: String!
      imageUrl: String!
    ): User
    registerDog(
      name: String!
      gender: String!
      imageUrl: String!
      tagLine: String!
      ownerId: Int!
    ): Dog
  }
  type Subscription {
    chatMessage(userId: Int!, recipientId: Int!): ChatMessage
  }
`;

module.exports = typeDefs;
