const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should count how many cards are in the deck', function() {
    const card1 = new Card(1, 'What is Abby\'s favorite food?', ['tacos', 'pizza', 'sushi'], 'sushi');
    const card2 = new Card(7, 'What month did Abby get married in?', ['October', 'July', 'September'], 'September');
    const card3 = new Card(4, 'What is Abby\'s middle name?', ['Katy', 'Catherine', 'Kathleen'], 'Catherine');
    const card4 = new Card(6, 'What is Abby\'s spirit animal?', ['Sloth', 'Dog', 'Cow'], 'Sloth');
    const deck = new Deck([card1, card2, card3, card4]);

    deck.countCards();

    expect(deck.countCards()).to.equal(4);
  });
});
