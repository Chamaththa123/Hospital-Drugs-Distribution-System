const express = require("express");
const router = express.Router();
const {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
} = require("../controller/customerController");

router.post("/", createCustomer);
router.get("/", getCustomers);
router.get("/:idCustomer", getCustomerById);
router.put("/:idCustomer", updateCustomer);

module.exports = router;
