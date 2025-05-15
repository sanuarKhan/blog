const { jwt_secret, jwt_expires_in } = require("../constant");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//user register controller
const userRegisterController = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: true,
        message: "User already exists",
      });
    }
    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    // token generation
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: "1h",
    // });
    res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in registering user",
      status: false,
      error,
    });
  }
};
//user login controller
const userLoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: true,
        message: "User not found",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: true,
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign({ id: user._id }, jwt_secret, {
      expiresIn: jwt_expires_in,
    });
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in logging in user",
      success: false,
      error,
    });
  }
};
//user auth controller
const userAuthController = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "User authenticated successfully",
      data: req.user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in authenticating user",
      success: false,
      error,
    });
  }
};
//user blogs controller
const userBlogsController = async (req, res) => {
  console.log(req.user);
  try {
    const user = await userModel.findById(req.user.id).populate("blogs");
    console.log(user);
    res.status(200).json({
      success: true,
      message: "User blogs fetched successfully",
      data: user.blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in fetching user blogs",
      success: false,
      error,
    });
  }
};
module.exports = {
  userRegisterController,
  userLoginController,
  userAuthController,
  userBlogsController,
};
