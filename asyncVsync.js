// //sync
// console.log("apple1");
// console.log("apple2");
// console.log("apple3");


// console.log("apple1");

// //async function
// setTimeout(() => {
//     console.log("apple2");
// }, 2000);

// console.log("apple3");

const fs = require('fs');

fs.readFile('text/file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data + " from async");
})

const data = fs.readFileSync('text/file.txt', 'utf-8');
console.log(data + " from sync");

console.log("end");
