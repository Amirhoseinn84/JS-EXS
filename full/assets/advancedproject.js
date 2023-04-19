const startGameBtn = document.getElementById('start-game-btn');

const start = function startgame() {
  console.log('Game is starting...');
};

start();

const person = {
  greet: function greet() {
    console.log('Hello there!');
  },
};

person.greet();

startGameBtn.addEventListener('click', start);
