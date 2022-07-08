const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  });

  it('should return current card being played', function() {
    const card1 = new Card(1, 'What is Abby\'s favorite food?', ['tacos', 'pizza', 'sushi'], 'sushi');
    const card2 = new Card(7, 'What month did Abby get married in?', ['October', 'July', 'September'], 'September');
    const card3 = new Card(4, 'What is Abby\'s middle name?', ['Katy', 'Catherine', 'Kathleen'], 'Catherine');
    const card4 = new Card(6, 'What is Abby\'s spirit animal?', ['Sloth', 'Dog', 'Cow'], 'Sloth');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update the turns count and update the current card', function() {

    const card1 = new Card(1, 'What is Abby\'s favorite food?', ['tacos', 'pizza', 'sushi'], 'sushi');
    const card2 = new Card(7, 'What month did Abby get married in?', ['October', 'July', 'September'], 'September');
    const card3 = new Card(4, 'What is Abby\'s middle name?', ['Katy', 'Catherine', 'Kathleen'], 'Catherine');
    const card4 = new Card(6, 'What is Abby\'s spirit animal?', ['Sloth', 'Dog', 'Cow'], 'Sloth');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);
    const turn = new Turn('sushi', card1);

    round.takeTurn('sushi');

    expect(turn).to.be.an.instanceof(Turn);
    expect(round.turns).to.equal(1);

    round.takeTurn('October');

    expect(round.turns).to.equal(2);
  });

  it('should evaluate guess and store any incorrect guesses', function() {

    const card1 = new Card(1, 'What is Abby\'s favorite food?', ['tacos', 'pizza', 'sushi'], 'sushi');
    const card2 = new Card(7, 'What month did Abby get married in?', ['October', 'July', 'September'], 'September');
    const card3 = new Card(4, 'What is Abby\'s middle name?', ['Katy', 'Catherine', 'Kathleen'], 'Catherine');
    const card4 = new Card(6, 'What is Abby\'s spirit animal?', ['Sloth', 'Dog', 'Cow'], 'Sloth');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);

    let guess1 = round.takeTurn('sushi');

    expect(guess1).to.equal('correct!')
    expect(round.incorrectGuesses.length).to.equal(0)

    round.takeTurn('October');

    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses.length).to.equal(1)
  });

  it('should calculate and return the percentage of correct guesses', function() {

    const card1 = new Card(1, 'What is Abby\'s favorite food?', ['tacos', 'pizza', 'sushi'], 'sushi');
    const card2 = new Card(7, 'What month did Abby get married in?', ['October', 'July', 'September'], 'September');
    const card3 = new Card(4, 'What is Abby\'s middle name?', ['Katy', 'Catherine', 'Kathleen'], 'Catherine');
    const card4 = new Card(6, 'What is Abby\'s spirit animal?', ['Sloth', 'Dog', 'Cow'], 'Sloth');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);

    let guess1 = round.takeTurn('sushi');

    expect(guess1).to.equal('correct!')
    expect(round.calculatePercentCorrect()).to.equal(100)

    round.takeTurn('October');

    expect(round.calculatePercentCorrect()).to.equal(50)
  });

  it('should notify user when the round is over', function() {

    const card1 = new Card(1, 'What is Abby\'s favorite food?', ['tacos', 'pizza', 'sushi'], 'sushi');
    const card2 = new Card(7, 'What month did Abby get married in?', ['October', 'July', 'September'], 'September');
    const card3 = new Card(4, 'What is Abby\'s middle name?', ['Katy', 'Catherine', 'Kathleen'], 'Catherine');
    const card4 = new Card(6, 'What is Abby\'s spirit animal?', ['Sloth', 'Dog', 'Cow'], 'Sloth');
    const deck = new Deck([card1, card2, card3, card4]);
    const round = new Round(deck);

    round.takeTurn('sushi');
    round.takeTurn('October');
    round.takeTurn('Katy');
    round.takeTurn('Cow');

    expect(round.endRound()).to.equal('** Round over! ** You answered 25% of the questions correctly!')
  });
});
