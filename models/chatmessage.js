"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chatMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      chatMessage.belongsTo(models.user, {
        as: "sender",
        foreignKey: "userId",
      });
      chatMessage.belongsTo(models.user, {
        as: "recipient",
        foreignKey: "recipientId",
      });
    }
  }
  chatMessage.init(
    {
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: DataTypes.STRING,
      imageUrlRecipient: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "chatMessage",
    }
  );
  return chatMessage;
};
