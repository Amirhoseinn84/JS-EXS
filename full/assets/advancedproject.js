const startGameBtn = document.getElementById('start-game-btn');

const start = function startgame() {
  console.log('Game is starting...');
};

// start();

const person = {
  greet: function greet() {
    console.log('Hello there!');
  },
};

person.greet();

startGameBtn.addEventListener('click', start);

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const playerCHoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Inavlid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener('click', function () {
  console.log('Game is starting...');
  const playerSelection = playerCHoice();
  console.log(playerSelection);
});

// startGameBtn.addEventListener('click', playerCHoice);
