function solution(my_string, k) {
    let answer = [...my_string];
    for(let i = 1; i < k; i++) {
        answer.push(my_string)
    }
    return answer.join('');
}