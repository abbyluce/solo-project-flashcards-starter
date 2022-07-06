const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store the users guess to the question', function() {
    const turn = new Turn('object');

    expect(turn.answer).to.equal('object');
  });

  it('should store the current card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.card).to.equal(card);
  });

  it('should return the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.returnGuess()).to.equal('object')
  });

  it('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should indicate if users guess matches the correct answer on the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const turn2 = new Turn('array', card);

    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should provide feedback to the user if their guess is correct or not', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const turn2 = new Turn('array', card);

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });

});
