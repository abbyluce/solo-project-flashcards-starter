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
    if (this.turns === this.deck.cards.length) {
      this.endRound();
    };
    return turn.giveFeedback()
  };

  calculatePercentCorrect() {
    return (this.correctGuesses.length / this.turns) * 100;
  };

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  };
};

module.exports = Round;
