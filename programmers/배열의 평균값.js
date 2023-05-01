const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function solution(numbers) {
  const arrSum = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return arrSum;
}
const average = solution(numbers) / numbers.length;
console.log(average);
