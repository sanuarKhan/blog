const mongoose = require("mongoose");

const Blog = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
    },
    image: {
      type: String,
    },

    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
const blogModel = mongoose.model("Blog", Blog);
module.exports = blogModel;
