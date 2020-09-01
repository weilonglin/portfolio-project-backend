"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      dog.belongsToMany(models.user, {
        through: "joinTableLikes",
        as: "userId",
        foreignKey: "dogId",
      });
      dog.belongsTo(model.user, {
        as: "owner",
      });
      dog.hasMany(models.tag);
    }
  }
  dog.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imageUrl: DataTypes.STRING,
      tagLine: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "dog",
    }
  );
  return dog;
};
