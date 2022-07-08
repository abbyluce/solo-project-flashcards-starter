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
    let turn = new Turn(guess, this.returnCurrentCard());
    turn.evaluateGuess();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard())
    } else {
      this.correctGuesses.push(this.returnCurrentCard())
    };
    this.turns++;
    return turn.giveFeedback()
  };

  calculatePercentCorrect() {
    let percentCorrect = (this.correctGuesses.length / this.turns) * 100;
    return percentCorrect.toFixed(2)
  };

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  };
};

module.exports = Round;
