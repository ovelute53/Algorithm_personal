// 문제 - 첫째 줄에는 별 1개, 둘쨰 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 입력 - 첫째 줄에 N(1 =< N =< 100)이 주어진다.
// 출력 - 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
// 예제 입력 5 예제 출력 * ** *** **** *****

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const inputData = input[0].split();
});
