function solution(a, b) {
    let answer = 0;
    if(Number(a + '' + b) == Number(b + '' + a)) {
        return Number(a + '' + b);
    } else {
        return Math.max(Number(a + '' + b), Number(b + '' + a));
    }
}