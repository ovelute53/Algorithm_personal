function solution(str1, str2) {
    const answer = [];
    for(let i = 0; i <= 10; i++) {
        answer.push(str1[i], str2[i]);
    }
    return answer.join('');
}