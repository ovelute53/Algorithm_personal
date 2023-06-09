const solution = (n) => {
    let answer = 0;
    if(n % 2 === 1) {
        for(let i = 1; i <= n; i++) {
            if(i % 2 === 1) {
                answer += Number(i);
            }
        }
    } else if(n % 2 === 0) {
        for(let i = 2; i <= n; i++) {
            if(i % 2 === 0) {
                answer += Number(i*i);
            }
        }
    }
    return answer;
}