let { Letter } = require('./letters');

class Word {
  constructor(word, done = false) {
    this.word = word.split('').map(letter => {
      return new Letter(letter);
    });
  }

  toString() {
    return this.word
      .map(letter => {
        return letter.toString();
      })
      .join(' ');
  }

  checkIfDone() {
    let string = this.toString();
    if (string.includes('_')) return false;
    return true;
  }

  checkGuess(character) {
    return this.word.forEach(letter => {
      return letter.guess(character);
    });
  }
}

module.exports = { Word };
