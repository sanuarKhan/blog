const express = require("express");
const {
  userRegisterController,
  userLoginController,
  userBlogsController,
} = require("../controllers/user.controller");
const authmiddleware = require("../middleware/authMiddleware");

const router = express.Router();

//user register route
router.post("/register", userRegisterController);
//user login route
router.post("/login", userLoginController);

//user blogs route
router.get("/myblogs", authmiddleware, userBlogsController);

module.exports = router;
