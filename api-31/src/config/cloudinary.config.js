require("dotenv").config();
const multer = require("multer")
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = multer.memoryStorage();
const tmpUpload = multer({storage})


module.exports = {
    tmpUpload, 
    cloudinary
}