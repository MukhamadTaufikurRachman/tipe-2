const { compareHashWithPass } = require("../helpers/bcrypt");
const { signPayloadtoToken } = require("../helpers/jwt");
const { User } = require("../models/index");

class UserController {
  static async register(req, res, next) {
    try {
      let { username, email, password, phoneNumber, address } = req.body;

      let data = await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
      });
      res.status(201).json(`${data.username} success created`);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      let findUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!findUser) {
        throw { name: "error invalid email or password" };
      }

      const compare = compareHashWithPass(password, findUser.password);
      if (!compare) {
        throw { name: "error invalid email or password" };
      }

      const payload = {
        id: findUser.id,
        username: findUser.username,
      };
      const access_token = signPayloadtoToken(payload);
      // console.log(payload.username);
      res.status(200).json({
        access_token,
        username: findUser.username,
        id: findUser.id,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
