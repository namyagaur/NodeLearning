const http = require("http");
const fs = require('fs');

http.createServer((req,resp)=>{
    //===========

    let collectHData = fs.readFileSync("header/home.html","utf-8",)
    
    //========

    let filee = "/home"
    if(req.url!="/"){
        filee = req.url;
    }
    if(req.url!='/style.css'){

        fs.readFile("html"+filee+"home.html","utf-8",(error,data)=>{
            if(error){
                resp.writeHead(500,{"content-type":"text/plain"});
                resp.end("INTERNAL SERVER ERROR");
                return false;
            }
            resp.write(headerdata + ""+
                data);
            resp.end();
        })
    }
    else if(req.url=="/style.css"){
        fs.readFile("html/style.css","utf-8",(error,data)=>{
            if(error){
                resp.writeHead(500,{"content-type":"text/plain"});
                resp.end("CSS NOT FOUND");
                return false;
            }
                resp.writeHead(500,{"content-type":"text/css"});
            resp.write(data);
            resp.end();
        })
    }
}).listen(6000)