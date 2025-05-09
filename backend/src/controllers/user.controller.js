const userModel = require("../models/user.model");

const userRegisterController = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }
    const user = await userModel.create({
      username,
      email,
      password,
    });
    res.status(200).json({
      status: true,
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
const userLoginController = async (req, res) => {
  console.log("User Login Controller");
};

module.exports = { userRegisterController, userLoginController };
