// const fs  = require('fs');
// //core module - fs, path, os, ye vo type of modules hote hai jise hum directly require krke use kr skte hai
// //local module - ye vo type of modules hote hai jise hum khud create krte hai aur use krte hai
// //npm module - ye vo type of modules hote hai jise hum npm se install krke use krte hai
// const os = require('os');

// fs.writeFileSync('dummy.txt',"This file was created by Node.js using fs module");
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.cpus());

console.log(process.cwd());
console.log(process.pid);

const {log} = require('console');
log("Hello World");
