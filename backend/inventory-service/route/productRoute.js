const express = require("express");
const router = express.Router();
const {
  createProduct,
  updateProduct,
  getProducts,
  updateProductQty,
} = require("../controller/productController");

router.post("/", createProduct);
router.get("/", getProducts);
router.put("/:idItem", updateProduct);
router.put("/add-qty/:idItem", updateProductQty);

module.exports = router;