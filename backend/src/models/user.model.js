const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "UserName is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Email is required"],
    },
    notifications: {
      type: Object,
      default: null,
    },
    blogs: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBloger: {
      type: Boolean,
      default: false,
    },
    isVarified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
