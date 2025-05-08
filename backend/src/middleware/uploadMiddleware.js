const multer = require("multer");
const cloudinary = require("../config/cloudinaryConfig");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");

function uploadMiddleware(folderName) {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folderName ? `uploads/${folderName}` : "uploads/default",
      format: async (req, file) => {
        // Get file extension without the dot
        return path.extname(file.originalname).substring(1);
      },
      public_id: (req, file) => {
        return `${file.fieldname}-${Date.now()}`;
      },
    },
  });

  return multer({
    storage: storage,
    limits: {
      fileSize: 5 * 1024 * 1024, // keep images size < 5 MB
    },
  });
}

module.exports = uploadMiddleware;
