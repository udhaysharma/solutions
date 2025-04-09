const numbers = [10, 45, 22, 89, 5, 67];

const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);

console.log(max);
