const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const userRouter = require("./users");
const productRouter = require("./products");

router.use("/", userRouter);
router.use(auth);
router.use("/product-order", productRouter);

module.exports = router;
