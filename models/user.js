"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // user.belongsToMany(models.dog, {
      //   through: "joinTableLike",
      //   as: "likes",
      //   foreignKey: "dogId",
      // });

      user.hasMany(models.joinTableLike, {
        as: "dogLike",
        foreignKey: "dogId",
      });
      user.hasMany(models.joinTableLike, {
        as: "userLike",
        foreignKey: "userId",
      });

      user.hasMany(models.dog, { as: "owner", foreignKey: "ownerId" });

      user.hasMany(models.chatMessage, { as: "sender", foreignKey: "userId" });
      user.hasMany(models.chatMessage, {
        as: "recipient",
        foreignKey: "recipientId",
      });
    }
  }
  user.init(
    {
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
