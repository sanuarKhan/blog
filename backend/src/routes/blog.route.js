const express = require("express");
const {
  createBlogController,
  getAllbogsController,
  updateBlogController,
  getSingleBlogController,
} = require("../controllers/blog.controller");
const upload = require("../services/uploadFiles");
const router = express.Router();

// get all blogs by 10 blogs per page
router.get("/blogs", getAllbogsController);

router.post("/create", upload.single("image"), createBlogController);

//update blog by id
router.put("/update/:id", upload.single("image"), updateBlogController);

//get single blog by id

router.get("/:id", getSingleBlogController);

module.exports = router;
