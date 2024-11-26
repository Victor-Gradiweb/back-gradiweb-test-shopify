const express = require("express");
const { getDiscountsController } = require("../controllers/discountController");
const {
  getActiveDiscountsController
} = require("../controllers/activeDiscountController");
const router = express.Router();

router.get("/discounts", getDiscountsController);
router.get("/active-discounts", getActiveDiscountsController);

module.exports = router;
