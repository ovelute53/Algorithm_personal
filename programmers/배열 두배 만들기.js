// const numbers = require("fs")
//   .readFileSync("example.txt", "utf8")
//   .toString()
//   .split(" ");

const numbers = [1, 2, 3, 4, 5];

const solution = numbers.reduce((a, b) => a.push(b * 2), []);
console.log(solution);
