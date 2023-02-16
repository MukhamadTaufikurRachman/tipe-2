const { User, Product } = require("../models/index");

class ProductOrderController {
  static async createProductOrder(req, res, next) {
    try {
      let { name, quantity, price } = req.body;

      let data = await Product.create({
        name,
        quantity,
        price,
        userId: req.user.id,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async readOrderProduct(req, res, next) {
    try {
      let data = await Product.findAll({
        include: {
          model: User,
        },
        where: {
          userId: req.user.id,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductOrderController;
