"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class joinTableLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      joinTableLike.belongsTo(models.user, {
        as: "userLike",
        foreignKey: "userId",
      });
      joinTableLike.belongsTo(models.dog, {
        as: "dogLike",
        foreignKey: "dogId",
      });
    }
  }
  joinTableLike.init(
    {
      liked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "joinTableLike",
    }
  );
  return joinTableLike;
};
