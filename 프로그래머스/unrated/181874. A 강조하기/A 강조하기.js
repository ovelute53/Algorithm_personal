function solution(myString) {
    let answer = '';
    for(let i = 0; i < myString.length; i++) {
        if(myString[i] === 'a' || myString[i] === 'A' ) {
            answer += myString[i].toUpperCase();
        } else {
            answer += myString[i].toLowerCase();
        }
    }
    return answer;
}