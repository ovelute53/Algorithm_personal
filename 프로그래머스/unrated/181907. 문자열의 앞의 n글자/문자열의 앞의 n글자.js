function solution(my_string, n) {
    const answer = [...my_string];
    answer.splice(n)
    return answer.join('');
}