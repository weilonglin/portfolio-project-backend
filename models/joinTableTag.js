"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class joinTableTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      joinTableTag.belongsTo(models.tag);
      joinTableTag.belongsTo(models.dog);
    }
  }
  joinTableTag.init(
    {
      tagId: DataTypes.INTEGER,
      dogId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "joinTableTag",
    }
  );
  return joinTableTag;
};
