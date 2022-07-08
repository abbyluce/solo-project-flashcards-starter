const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let card1 = new Card();
  let card2 = new Card();
  let card3 = new Card();
  let card4 = new Card();
  let deck = new Deck();

  beforeEach(() => {
    card1 = new Card(1, 'What is Abby\'s favorite food?', ['tacos', 'pizza', 'sushi'], 'sushi');
    card2 = new Card(7, 'What month did Abby get married in?', ['October', 'July', 'September'], 'September');
    card3 = new Card(4, 'What is Abby\'s middle name?', ['Katy', 'Catherine', 'Kathleen'], 'Catherine');
    card4 = new Card(6, 'What is Abby\'s spirit animal?', ['Sloth', 'Dog', 'Cow'], 'Sloth');
    deck = new Deck([card1, card2, card3, card4]);
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should count how many cards are in the deck', function() {
    deck.countCards();
    expect(deck.countCards()).to.equal(4);
  });
});
