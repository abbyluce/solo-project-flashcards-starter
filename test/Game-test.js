const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();

    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();

    expect(game).to.be.an.instanceof(Game);
  });

  it('should create a deck of cards and a round', function() {
    const mockData = [{
      "id": 1,
      "question": "What is Abby\'s favorite food?",
      "answers": ['tacos', 'pizza', 'sushi'],
      "correctAnswer": "sushi"
    }, {
      "id": 2,
      "question": "What month did Abby get married in?",
      "answers": ['October', 'July', 'September'],
      "correctAnswer": "September"
    }, {
      "id": 3,
      "question": "What is Abby\'s middle name?",
      "answers": ['Katy', 'Catherine', 'Kathleen'],
      "correctAnswer": 'Catherine'
    }, {
      "id": 4,
      "question": "What is Abby\'s spirit animal?",
      "answers": ['Sloth', 'Dog', 'Cow'],
      "correctAnswer": 'Sloth'
    }]

    const game = new Game(mockData);

    game.createCards();
    game.createDeck();
    game.createRound();

    expect(game.deck).to.not.equal(null);
    expect(game.currentRound).to.not.equal(null);
  });
});
