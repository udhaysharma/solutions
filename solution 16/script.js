const words = ["Hello", "world", "JavaScript", "best"];

const totalCharacters = words.reduce((acc, curr) => acc + curr.length, 0);

console.log(totalCharacters);
