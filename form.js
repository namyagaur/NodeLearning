const http = require('http');
const fs = require('fs');

const queryString = require("querystring");

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
            let dataBody = []; //ye ek empty array hai basically 
            // jo bhi data ayega vo chunks ke form mein 
            // ayega aur hum usko isme store krenge
            
            //  req.on('data', +> Jab bhi request ka koi data piece server tak pahuchta hai 
            // Ye event fire hota hai
            req.on('data', (chunk) => {
                dataBody.push(chunk);
            });

            //ye kaafi imp hai iska mtlb hai ki 
            // ab data receive hona complete hogya hai 
            // aur hum aage ka kaam krkte h
            req.on('end', () => {
                //basically jo bhi data aata h vo binary form mein ataa hai 
                // jisko hum buffer ke form mein store krte h
                //  aur jab data receive hona complete ho jata hai 
                // to hum usko string mein convert krke use krte h
                let rawData = Buffer.concat(dataBody).toString();
                //Is string ko tod ke key-value object bana deta hai.
                let readabledata = queryString.parse(rawData);
                let dataString = "My name is " + readabledata.name + " and my email is " + readabledata.email;
                console.log(dataString);
                //sync func to create file - Ek kaam complete hone tak next kaam ruk jaata hai.
                // fs.writeFileSync("text/"+readabledata.name+".txt",dataString);
                

                //ASYNC -Kaam background me chalu hota hai, aur server next kaam pe move kar jaata hai.
                fs.writeFile("text/" + readabledata.name + ".txt", dataString, (err) => {
                    if(err){
                        resp.end("Internal Server Error");
                        return false;
                    }else{
                        console.log("File created successfully");
                    }
                })
            })
            resp.writeHead(200, { "content-type": "text/html" });

            resp.write("<h2>Form Submitted</h2>");
        }

    })
}).listen(3300);
