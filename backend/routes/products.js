const express = require("express");
const ProductOrderController = require("../controllers/productOrderController");
const router = express.Router();

router.post("/add", ProductOrderController.createProductOrder);
router.get("/list", ProductOrderController.readOrderProduct);

module.exports = router;
