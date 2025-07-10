const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/authControllers");
const router = express();

router.post("/", loginUser);
router.post("/signup", registerUser);
router.post("/logout", logout);

module.exports = router;
