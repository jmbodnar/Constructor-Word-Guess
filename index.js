let { Word } = require('./word');

// ----- Test Basic Word Guess ---- // 

let test = new Word('test');
console.dir(test.toString());
test.checkGuess("e");
console.dir(test.toString());
test.checkGuess("t");
console.dir(test.toString());
test.checkGuess("s");
console.dir(test.toString());


