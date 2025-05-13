require("dotenv").config();
const port = process.env.PORT;
const db_url_local = process.env.DB_LOCAL_URI;
const db_url_cloud = process.env.DB_CLOUD_URI;
// const cloudinary_url = process.env.CLOUDINARY_URL;
const cloudinary_api_key = process.env.CLOUDINARY_API_KEY;
const cloudinary_api_secret = process.env.CLOUDINARY_API_SECRET;
const cloudinary_name = process.env.CLOUDINARY_NAME;
const jwt_secret = process.env.JWT_SECRET;
const jwt_expires_in = process.env.JWT_EXPIRATION;

module.exports = {
  port,
  db_url_local,
  db_url_cloud,

  cloudinary_api_key,
  cloudinary_api_secret,
  cloudinary_name,

  jwt_secret,
  jwt_expires_in,
};
