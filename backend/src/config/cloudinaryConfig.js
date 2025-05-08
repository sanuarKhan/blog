const cloudinary = require("cloudinary").v2;
const {
  cloudinary_api_key,
  cloudinary_api_secret,
  cloudinary_name,
} = require("../constant");

// Cloudinary Configuration
cloudinary.config({
  cloud_name: cloudinary_name,
  api_key: cloudinary_api_key,
  api_secret: cloudinary_api_secret,
});

// Export the configured cloudinary instance
module.exports = cloudinary;
