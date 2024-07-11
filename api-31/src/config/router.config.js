const express = require('express')
const app = express()

// router 
    // /api/v1

    // http://localhost:9005/api/v1/health
app.get("/health", (req, res) => {
    res.end("This is healthcheck url")
})


app.get('/course/:slug' , (req, res) => {
    const params = req.params;      // object data 
    const query = req.query;

    res.json({
        slug: params.slug,
        query: query
    })
})

// http://localhost:9005/api/v1/
app.use("/", (request, response) => {
    response.end("Hello world")
})

module.exports = app;