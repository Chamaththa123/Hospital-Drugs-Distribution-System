const express = require("express");
const router = express.Router();
const {
  addSupplier,
  getSupplier,
  getSupplierById,
  changeSupplierStatus,
  deleteSupplier,
} = require("../controller/supplierController");

router.post("/", addSupplier);
router.get("/", getSupplier);
router.get("/:idSupplier", getSupplierById);
router.put("/:idSupplier", changeSupplierStatus);
router.put("/delete/:idSupplier", deleteSupplier);

module.exports = router;
