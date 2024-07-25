require("dotenv").config();
const express = require('express');
const router = require("./router.config")
const app = express()


// json parsers 
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

// http://localhost:9005/assets/
// public/
app.use("/assets", express.static('./public/'))
app.use("/images", express.static("./public/uploads/"))


// mount router to app 
app.use("/api/v1", router)


// 404 request
app.use((req, res, next) => {
    next({code: 404, message: "Resource not found", status: "NOT_FOUND" });
});

// error handling middleware
app.use((error, req, res, next) => {
    // 
    console.log("----------------------------- Error Handler: ", error);

    let result = error.detail || null;
    let message = error.message || "Server error...";
    let status = error.status || "INTERNAL_SERVER_ERROR";

    let code = error.code || 500;

    res.status(code).json({
        result: result, 
        message: message,
        meta: null, 
        status: status
    })
})
module.exports= app;