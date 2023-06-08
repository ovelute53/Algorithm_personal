function solution(arr, k) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        k % 2 === 0 ? answer.push(arr[i]+k) : answer.push(arr[i]*k)    
    }
    return answer;
}