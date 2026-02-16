const http = require('http');

const userData = [
    {
        name : 'Namya Gaur',
        age : 21,
        email : 'namyagaur.official@gmail.com'
    },{
        name : 'Shivangi Singh',
        age : 21,
        email : 'shivangisingh.official@gmail.com'
    },
    {
        name : 'Tanishq Tyagi',
        age : 20,
        email : 'tanishqtyagi.official@gmail.com'
    }
]
http.createServer((res,resp)=>{
    resp.setHeader("Content-Type","application/json");
    resp.write(JSON.stringify(userData))
    resp.end();
    
}).listen(5300);