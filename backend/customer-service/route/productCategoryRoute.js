const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategory,
  updateCategoryById,
  deleteCategoryById,
} = require("../controller/productCategoryController");

router.post("/", createCategory);
router.get("/", getCategory);
router.put("/:idItem_Category", updateCategoryById);
router.delete("/:idItem_Category", deleteCategoryById);

module.exports = router;
