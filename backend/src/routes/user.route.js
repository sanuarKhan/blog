const express = require("express");
const {
  userRegisterController,
  userLoginController,
  userAuthController,
} = require("../controllers/user.controller");
const authmiddleware = require("../middleware/authMiddleware");

const router = express.Router();

//user register route
router.post("/register", userRegisterController);
//user login route
router.post("/login", userLoginController);
// user auth route
router.get("/auth", authmiddleware, userAuthController);

module.exports = router;
