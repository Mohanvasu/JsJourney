const fs = require('fs');

console.log("Starting program");

const contents = fs.readFileSync('hello.txt','utf-8');
console.log("File reading success", contents);

console.log("End of program");