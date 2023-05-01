// 행렬 덧셈
// 문제 번호 : 2738

/* 
문제
N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.
*/

/* 
입력
첫째 줄에 행렬의 크기 N 과 M이 주어진다. 
둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다. 
이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다. 
N과 M은 100보다 작거나 같고, 행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.
*/

/* 
출력
첫째 줄부터 N개의 줄에 행렬 A와 B를 더한 행렬을 출력한다. 행렬의 각 원소는 공백으로 구분한다.
*/

const nums = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) =>
    x
      .trim()
      .split(" ")
      .map((x) => +x)
  );
//nums 값을 만들 때부터 map을 화살표함수로 이차원배열을 만들어줄 수 있다

// const [firstArrayLike, secondArrayLike] = [
//   Number(nums.slice(1, 4)),
//   Number(nums.slice(4, 7)),
// ];
// slice로 첫 번째 배열요소를 자르는 것은 비효율적이었다
const [n, m] = nums.shift();
// console.log(nums);
// shift로 자르면 배열을 뽑아내기 쉬워진다

let arr = new Array(m);
// console.log(arr);
let newArray = [];
// 빈 배열을 만들어준다
arr.fill(0);
// arr에 0으로 채운다
for (let i = 0; i < n; i++) {
  newArray.push([...arr]);
  //arr에 있는 걸  newArray의 빈배열에 추가해준다
}
// console.log(newArray);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    newArray[i][j] = nums[i][j] + nums[i + n][j];
  }
}

let result = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    result += newArray[i][j].toString() + " ";
  }
  result += "\n";
}
console.log(result);
// const totalArray = [firstArrayLike, secondArrayLike];
// console.log(totalArray);

// sumA = firstArrayLike[0][0] + secondArrayLike[0][0];
// console.log(sumA);
// sumB = firstArrayLike[1] + secondArrayLike[1];
// sumC = firstArrayLike[2] + secondArrayLike[2];
// let result = [sumA, sumB, sumC];
// console.log(result);
// let newArray = [];

// for (let i = 0; i < arrayLike.length; i++) {
//   newArray.push(arrayLike[i].split(" ").map(Number));
// }
// console.log(newArray);
// let flatArr = newArray.flat();
// console.log(flatArr);
