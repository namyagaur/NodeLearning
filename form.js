const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {
    fs.readFile("html/form.html", "utf-8", (err, data) => {
        if (err) {
            resp.writeHead(500, { "content-type": "text/plain" });
            resp.end("Error loading form");
        }
        if (req.url == '/') {
            resp.writeHead(200, { "content-type": "text/html" });
            resp.end(data);
        } else if (req.url == "/submit") {
            resp.writeHead(200, { "content-type": "text/html" });

            resp.write("<h2>Form Submitted</h2>");
        }
    })
}).listen(3300);
// http.createServer((res, resp) => {
//     resp.writeHead(200, { 'content-type': 'text/html' });
//     if (req.url == "/") {
//         resp.write(`
//             <form action = "/submit" method = "post">
//             <input type = "text" placeholder = "Enter your Name" name = "name"/>
//             <input type = "text" placeholder = "Enter your email" name = "email"/>
//             <button>Submit</button>
//             </form>`);

//     } else if (req.url == "/submit"){
//         resp.write("<h2>Form Submitted</h2>");
//     }
//     resp.end();

// }).listen(3300);