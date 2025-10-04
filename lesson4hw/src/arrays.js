const strings = ['Anna', 'Bob', 'Charlie', 'Diana'];
const numbers = [1, 2, 3, 4];
const booleans = [true, false, true, false];
const mixed = ['Anna', 42, true, { key: 'value' }];

strings.push('Anna');
console.log(strings);

numbers.unshift(5);
console.log(numbers);

booleans[0] = false;
console.log(booleans);

mixed.shift();
console.log(mixed);

strings.forEach(name => {
    console.log(`Hi ${name}!`);
});

numbers.forEach((num, index) => {
    numbers[index] = num * 2;
});
console.log(numbers);

booleans.forEach(bool => console.log(!bool));
mixed.forEach(user => console.log(user));

const newStrings = strings.map(name => {
    return `Hi ${name}!`;
});
console.log(newStrings);

const squaredNumbers = numbers.map(num => num ** 2).filter(num => num > 5);
console.log(squaredNumbers);

const boolStrings = booleans.map(bool => bool ? 'yes' : 'no');
console.log(boolStrings);

const types = mixed.map(item => typeof item);
console.log(types);
