const solution = (num_list) => {
    if(num_list.length >= 11) {
        const result = num_list.reduce(function add(sum, cur){
            return sum + cur;
        }, 0);
        return result;
    } else if(num_list.length <= 10) {
        let answer = 1;
        for (let i = 0; i < num_list.length; i++) {
            answer *= num_list[i];
        } 
        return answer;
    }
}