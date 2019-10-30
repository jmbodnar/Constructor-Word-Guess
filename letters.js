class Letter {
  constructor(letter, guessed = false) {
    this.letter = letter;
    this.guessed = guessed;
  }

  toString() {
    return this.guessed ? this.letter : '_';
  }

  guess(value) {
    if (!this.guessed) {
      this.guessed = value === this.letter;
    }
  }
}

module.exports = { Letter };
