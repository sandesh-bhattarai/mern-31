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

module.exports = {
    uploadHelper,
    fileDelete
}