function sumArray(arr) {
    const numbers = arr.filter(item => typeof item === 'number');

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const numberArray = [1, 2, 3, 4];
const stringArray = ['a', 'b', 'c'];

console.log( sumArray(numberArray));
console.log(sumArray(stringArray));
