const express = require("express");
const {
  createBlogController,
  getAllbogsController,
  updateBlogController,
  getSingleBlogController,
  deleteBlogController,
} = require("../controllers/blog.controller");
const upload = require("../services/uploadFiles");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// get all blogs by 10 blogs per page
router.get("/blogs", getAllbogsController);

router.post(
  "/create",
  authMiddleware,
  upload.single("image"),
  createBlogController
);

//update blog by id
router.put(
  "/update/:id",
  authMiddleware,
  upload.single("image"),
  updateBlogController
);

//get single blog by id

router.get("/:id", getSingleBlogController);

//delete blog by id
router.delete("/delete/:id", authMiddleware, deleteBlogController);

module.exports = router;
