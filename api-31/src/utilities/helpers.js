const { cloudinary } = require("../config/cloudinary.config")
const fs = require('fs');

const uploadHelper = async (filepath, folder="mern-31") => {
    try {
        console.log(filepath)
        const uploadedFile = await cloudinary.uploader.upload(filepath, {resource_type: "auto", folder: folder})   
        // delete image 
        fileDelete(filepath)
        return uploadedFile.secure_url;
    } catch(exception) {
        console.log(exception)
        throw {code: 400, message: "File cannot be uploaded at this moment."}
    }
}


const fileDelete = (path) => {
    if(fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
}

const randomStringGenerator = (len =100) => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const length = chars.length;
    let random = "";
    for(let i = 0; i < len; i++) {
        const posn = Math.ceil(Math.random() * (length-1))
        random += chars[posn];
    }
    return random
}

module.exports = {
    uploadHelper,
    fileDelete,
    randomStringGenerator
}