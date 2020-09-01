"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class joinTableLikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      joinTableLikes.belongsTo(models.user, { as: "id" });
      joinTableLikes.belongsTo(models.dog, { as: "id" });
    }
  }
  joinTableLikes.init(
    {
      liked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "joinTableLikes",
    }
  );
  return joinTableLikes;
};
