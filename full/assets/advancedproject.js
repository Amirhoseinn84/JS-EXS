const startGameBtn = document.getElementById('start-game-btn');

// const start = function startgame() {
//   console.log('Game is starting...');
// };

// // start();

// const person = {
//   greet: function greet() {
//     console.log('Hello there!');
//   },
// };

// person.greet();

// startGameBtn.addEventListener('click', start);

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
let gameIsRunning = false;

const getPlayerCHoice = function () {
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
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerCHoice();
  console.log(playerSelection);
});

// startGameBtn.addEventListener('click', playerCHoice);
