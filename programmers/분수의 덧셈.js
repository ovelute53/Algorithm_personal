// 문제
/* 
첫 번째 분수의 분자와 분모를 뜻하는 `numer1`, `denom1`, 두 번째 분수의 분자와 분모를 뜻하는 `numer2`, `denom2`가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

const fs = require("fs");

const input = fs.readFileSync("example.txt").toString().split(" ");

function solution(num1, denum1, num2, denum2) {
  let topNum = num1 * denum2 + num2 * denum1;
  let botNum = num1 * num2;
  let maximum = 1;
  for(let i = 0; i <= topNum; i++){
      if(topNum % i === 0 && botNum % i === 0){
          maximum = 1;
      }
  }
  return [topNum/maximum, botNum/maximum];
}