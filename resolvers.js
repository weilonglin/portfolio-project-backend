const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.user.findByPk(id);
    },
    async dog(root, { id }, { models }) {
      return models.dog.findByPk(id);
    },
  },
  User: {
    async dogs(dog) {
      return dog.getOwner();
    },
  },
  Dog: {
    async owner(user) {
      return user.getOwner();
    },
  },
};

module.exports = resolvers;
