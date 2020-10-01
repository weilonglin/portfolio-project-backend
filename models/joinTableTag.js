"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class joinTableTag extends Model {
    static associate(models) {}
  }
  joinTableTag.init(
    {
      tagId: {
        type: DataTypes.INTEGER,
        references: {
          model: "tags",
          key: "id",
        },
      },
      dogId: {
        type: DataTypes.INTEGER,
        references: {
          model: "dogs",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "joinTableTag",
    }
  );
  return joinTableTag;
};
