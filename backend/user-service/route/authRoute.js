const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
  changeUserStatus,
} = require("../controller/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getUsers);
router.get("/:idUser", getUserById);
router.put("/:idUser", changeUserStatus);

module.exports = router;
