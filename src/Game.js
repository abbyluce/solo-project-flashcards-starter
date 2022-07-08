const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor(data) {
    this.currentRound = null;
    this.deck = null;
    this.data = data || prototypeQuestions;
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  };

  printQuestion(round) {
      util.main(round);
  };

  createCards() {
    const cardDeck = this.data.map((questionData) => {
      return new Card(questionData.id, questionData.question, questionData.answers, questionData.correctAnswer)
    });
    return cardDeck;
  };

  createDeck() {
    this.deck = new Deck(this.createCards())
    return this.deck
  };

  createRound() {
    this.currentRound = new Round(this.createDeck())
    return this.currentRound
  };

  start() {
    this.createRound();
    this.printMessage(this.createDeck(), this.createRound());
    this.printQuestion(this.createRound());
  };
};

module.exports = Game;
