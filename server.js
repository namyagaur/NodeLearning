const http = require('http');

http.createServer((req,resp)=>{
resp.write("<h1>Hello This is Namya Gaur</h1>");
resp.end();
}).listen(4800);
