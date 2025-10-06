const sumArray = (arr) => {
    const numbers = arr.filter(item => typeof item === 'number');
    return numbers.reduce((acc, num) => acc + num, 0);
};

const num = [5, 15, 25, 35];
const letters = ['a', 'b', 'c'];

console.log(sumArray(num));
console.log(sumArray(letters));
