
const http = require("http");
const url = require("url");

const server = http.createServer(function(req, res) {
    const path = url.parse(req.url).path;
    switch (path) {
        case "/":
            res.end("hello world, qinghe");
            break;
        case "login":
            res.end("login success !");
            break;
        default:
            res.end("hello world, qinghe");

    }
});
server.listen("3000", function() {
    console.log("listening...")
});

