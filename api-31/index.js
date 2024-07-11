const http = require("http");
const app= require("./src/config/express.config")

// express application 
const server = http.createServer(app)

// listen
// port nos => 
        // 0- 2*16-1 ~65535
// http => 80, https => 443, smtp => 25
// 192.168.101.180:9005/
server.listen(9005, "127.0.0.1", (err) => {
    if(!err) {
        console.log("Server is running ...")
        console.log("Press ctrl+c to discontinue...")
    }
})