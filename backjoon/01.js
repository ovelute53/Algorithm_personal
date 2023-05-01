// 문제 - 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 입력 - 첫째 줄에 A와 B가 주어진다.(0<A,B<10)
// 출력 - 첫째 줄에 A+B를 출력한다.
// 예제 입력 - 1 2 ,예제 출력 - 3

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
// 선언된 input의 배열이 비어져 있음

rl.on("line", function (line) {
  input.push(line);
  // 첫째 줄에 A와 B가 주어진다.
}).on("close", function () {
  const inputData = input[0].split(" ");
  // 선언된 inputData는 push된 input의 배열의 첫 번쨰를 공백을 기준으로 나누어 호출한다. -> 1 2
  const [a, b] = inputData.map(Number);
  // 선언된 배열 a, b는 inputData에서 호출된 1 2의 정수형임을 알려준다.
  console.log(a + b);
  //a와 b의 값을 더해준다.
});
