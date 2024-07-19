const multer = require("multer");
const fs = require("fs");

const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        // location set // user/
        const path = "./public/uploads/"+req.uploadDir
        // ./public/uploads/user/
        if(!fs.existsSync(path)){
            fs.mkdirSync(path, {recursive: true})
        }
        cb(null, path)
    },
    filename: (req, file, cb) => {
        // file name unique, a.jpg
        // filename > filename.ext
        // a.b.c.jpg => ["a","b",'c',"jpg"]
        const ext = file.originalname.split(".").pop();
        const randNum = Math.ceil(Math.random() * 999);
        const filename = Date.now()+"-"+randNum+"."+ext;

        cb(null, filename)
    }
})

const uploader = multer({
    storage: myStorage
    // storage: multer.memoryStorage
});

const setPath = (path) => {
    return (req, res, next) => {
        // path product
        req.uploadDir = path;
        next()
    }
}

// setPath('user/'), uploader() 
module.exports = {
    uploader,
    setPath
}