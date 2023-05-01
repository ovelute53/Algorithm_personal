const fs = require("fs");

const input = fs.readFileSync("example.txt").toString().trim().split("\n");

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a * (b % 10));
console.log(a * Math.floor((b % 100) / 10));
console.log(a * Math.floor(b / 100));
console.log(a * b);
