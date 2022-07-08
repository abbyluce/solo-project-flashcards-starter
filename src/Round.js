const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  };

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  };

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    this.turns++
    turn.evaluateGuess()
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(guess)
    } else if (turn.evaluateGuess() === true) {
      this.correctGuesses.push(guess)
    }
    return turn.giveFeedback()
  };

  calculatePercentCorrect() {
    return (this.correctGuesses.length / this.turns) * 100
  };

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
};

module.exports = Round;
