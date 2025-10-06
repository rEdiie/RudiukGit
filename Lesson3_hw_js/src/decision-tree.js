const a = 2;
const b = 4;
const c = '8';

if (a > b) {
    console.log('a > b');
} else if (a < b) {
    console.log('a < b');
} else {
    console.log('a === b');
}

if (a > b && c == 8) {
    console.log('a > b && c == 8');
} else if (a < b && c == 8) {
    console.log('a < b && c == 8');
}

if (a > b || c == 8) {
    console.log('a > b || c == 8');
} else if (a < b && typeof c == 'number') {
    console.log('a < b && typeof c == string');
} else {
    console.log('non of the conditions above');
}
