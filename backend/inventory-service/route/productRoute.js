const express = require("express");
const router = express.Router();
const {
  createCategory,
  createProduct,
  getCategory,
  getItems,
  getServices,
  updateCategoryById,
  updateProduct,
  getProducts,
  deleteCategoryById,
  updateProductStatus,
  updateProductQty,
  adjustProductQty,
  createSubCategory,
  getSubCategory,
  updateSubCategoryById,
} = require("../controllers/productController");

router.post("/", createProduct);
router.get("/items/:Branch_idBranch", getItems);
router.get("/services/:Branch_idBranch", getServices);
router.post("/status/:idItem", updateProductStatus);
router.get("/:Branch_idBranch", getProducts);
router.put("/:idItem", updateProduct);
router.put("/add-qty/:idItem", updateProductQty);
router.put("/adjust-qty/:idItem", adjustProductQty);

router.post("/category", createCategory);
router.delete("/category/:idItem_Category", deleteCategoryById);
router.get("/category/:Branch_idBranch", getCategory);
router.put("/category/:idItem_Category", updateCategoryById);

router.post("/sub-category", createSubCategory);
router.get("/sub-category/:Branch_idBranch", getSubCategory);
router.put("/sub-category/:idItem_SubCategory", updateSubCategoryById);
module.exports = router;