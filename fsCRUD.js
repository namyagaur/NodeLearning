const fs = require('fs');

console.log(process.argv);
const operation = process.argv[2];
if(operation=="write"){
    const name = process.argv[3];
    const content = process.argv[4];
fs.writeFileSync(name+".txt",content);
}
else if(operation=="read"){
    const name = process.argv[3];
const content = fs.readFileSync(name+".txt","utf-8");
console.log(content);
}
else if(operation == "delete"){
    fs.unlinkSync(process.argv[3]+".txt");
}
else if(operation == "update"){
    const name = process.argv[3];
    const content = process.argv[4];
    fs.appendFileSync(name+".txt",content);
}
//Create, Read, Update, Delete
// fs.writeFileSync("text/apple.txt","This is a fruit which is red in color");

// const data = fs.readFileSync("text/apple.txt","utf-8");
// console.log(data);

// fs.appendFileSync("text/apple.txt","This fruit is very wweet and good fro health");

// // fs.unlinkSync("text/apples.txt");