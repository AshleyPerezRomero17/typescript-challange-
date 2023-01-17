function sumArray(numbers: number[]) : number {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

console.log(sumArray([1, 2, 3, 4, 5])); // will output 15