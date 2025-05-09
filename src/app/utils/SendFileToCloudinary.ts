import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import config from "../config";

// Configuration
cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret, // Click 'View API Keys' above to copy your API secret
});

export const SendFileToCloudify = (fileName: string, path: string) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      fileName,
      { public_id: path },
      function (error, result) {
        if (error) reject(error);
        else resolve(result);
      }
    );
  });
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/uploads ");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
