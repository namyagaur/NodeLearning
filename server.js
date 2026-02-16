const http = require('http');

http.createServer((req,resp)=>{
resp.write("<h1>Hello, This is Namya Gaur</h1><h3>Welcome to my Node.js server</h3>");
resp.end();
}).listen(4800);

http.createServer((req,resp)=>{
resp.write("<h1>Hello, other server</h1><h3>Welcome to my Node.js server</h3>");
resp.end();
}).listen(5800);

