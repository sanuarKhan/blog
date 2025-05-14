const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../constant");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Unauthorized", success: false });
  }

  jwt.verify(token, jwt_secret, (err, decode) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized", success: false });
    } else {
      req.user = { id: decode.id };
      next();
    }
  });
};

module.exports = authMiddleware;
