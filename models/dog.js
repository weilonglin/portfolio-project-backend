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
      dog.hasMany(models.joinTableLike, {
        as: "dogLike",
        foreignKey: "dogId",
      });

      dog.belongsTo(models.user, { as: "owner" });

      dog.belongsToMany(models.tag, {
        through: "joinTableTags",
        as: "tags",
        foreignKey: "dogId",
      });
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
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "dog",
    }
  );
  return dog;
};
