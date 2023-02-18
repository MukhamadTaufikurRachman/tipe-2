"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Product name is required!",
          },
          notEmpty: {
            msg: "Product name is required!",
          },
        },
      },
      quantity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Quantity Product is required!",
          },
          notEmpty: {
            msg: "Quantity Product is required!",
          },
          min: {
            args: 1,
            msg: "Minimum product quantity is 1",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Price is required!",
          },
          notEmpty: {
            msg: "Price is required!",
          },
          min: {
            args: 100000,
            msg: "Minimum product price is Rp 100.000",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
