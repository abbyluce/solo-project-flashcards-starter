const Game = require('../src/Game');
const data = require('../src/data');

const newGame = new Game(data)
newGame.start();

console.log('Your project is running...');
