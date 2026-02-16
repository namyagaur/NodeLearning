const http = require('http');
const age = 29;
const server = http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.write(`
        <html>
        <head></head>
        <Body>
        <h1>THIS IS HOW U CAN EMBBED HTML AND SEND IT AS A RESPONSE</h1>
        <p>THIS IS A PARAGRAPH age - `+age+`</p>
        <h2>Date = ${new Date()}</h2>
        </body>
        </html>
        `);
    resp.end();
    process.exit()
})
server.listen(4800)