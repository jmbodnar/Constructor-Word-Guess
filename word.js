let { Letter } = require('./letters');

class Word {
  constructor(word) {
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

  checkGuess(character) {
    return this.word.forEach(letter => {
      return letter.guess(character);
    });
  }
}

module.exports = { Word };
