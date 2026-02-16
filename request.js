const http = require('http');
http.createServer((req, resp) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log(req.headers.host);
    if (req.url == "/") {
        resp.write("<h1>Homepage</h1>");
    } else if (req.url == "/about") {
        resp.write("<h1>About</h1>");
    } else {
        resp.write("<h1>OTHER PAGE</h1>");
    }
    resp.write("<h1>Homepage</h1>");
    resp.end();
}).listen(5600);