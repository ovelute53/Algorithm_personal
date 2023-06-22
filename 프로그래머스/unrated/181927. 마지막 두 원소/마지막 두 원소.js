const solution = (arr) => {
    arr.at(-1) > arr.at(-2) ? arr.push(arr.at(-1) - arr.at(-2)) : arr.push(arr.at(-1) * 2);
    return arr;
}