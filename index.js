const { Word } = require('./word');
const fs = require('fs');
const inquirer = require('inquirer');
let word = '';

// Create a chainable promise using fs.readFile to read (and later parse) word list
const readFile = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf8' }, (error, contents) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(contents);
    });
  });
};

// Function to get a random item from an array of words
const getRandomWord = words => {
  const rand = Math.floor(Math.random() * words.length);
  return words[rand];
};

// Recursive function that initiates and carries out gameplay
const getPlayerGuess = word => {
  let guessed = word.checkIfDone();
  if (!guessed) {
    inquirer
      .prompt([
        {
          name: 'letter',
          message: 'Guess a letter: '
        }
      ])
      .then(answer => {
        console.log(
          `\nYou guessed the letter '${answer.letter}'. Here's where you stand now:`
        );
        word.checkGuess(answer.letter);
        console.log(`\n\t${word.toString()}\n`);
        getPlayerGuess(word);
      });
  } else {
    console.log(`You guessed it! The word was '${word.toString()}'`);
  }
};

// Run the game...
let promise = readFile('./random-words.txt')
  .then(contents => {
    return new Word(getRandomWord(contents.split('\n')));
  })
  .then(word => {
    getPlayerGuess(word);
  });
