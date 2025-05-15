const blogModel = require("../models/blog.model");
const userModel = require("../models/user.model");

// get all blogs
const getAllbogsController = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      status: true,
      message: "blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in getting blogs",
      status: false,
      error,
    });
  }
};
//get single blog
const getSingleBlogController = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await blogModel.findById({ _id: id });
    res.status(200).json({
      status: true,
      message: "blog fetched successfully",
      data: blog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in getting blog",
      status: false,
      error,
    });
  }
};

//Create blog controller
const createBlogController = async (req, res) => {
  const { title, content } = req.body || {};
  const authorId = req.user.id;
  const user = await userModel.findById({ _id: authorId });
  const author = user.username;

  try {
    const newBlog = await blogModel.create({
      title,
      content,
      image: req.file?.path || null,
      author,
    });
    res.status(200).json({
      status: true,
      message: "blog created successfully",
      data: newBlog,
    });
    user.blogs.push(newBlog);
    await user.save();
    console.log(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in creating blog",
      status: false,
      error,
    });
  }
};

//update blog controller
const updateBlogController = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById({ _id: req.user.id });
  const { title, content } = req.body || {};
  const image = req.file?.path || null;
  // console.log(req.body, req.file);
  // console.log(id, "ami id");
  try {
    const updatedBlog = await blogModel.findByIdAndUpdate(
      { _id: id },
      {
        title,
        content,
        image,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      status: true,
      message: "blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in updating blog",
      status: false,
      error,
    });
  }
};

//delete blog controller
const deleteBlogController = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await blogModel.findByIdAndDelete({ _id: id });
    res.status(200).json({
      status: true,
      message: "blog deleted successfully",
      data: deletedBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in deleting blog",
      status: false,
      error,
    });
  }
};

module.exports = {
  createBlogController,
  getAllbogsController,
  updateBlogController,
  deleteBlogController,
  getSingleBlogController,
};
