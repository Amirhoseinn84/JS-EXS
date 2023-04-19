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
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
let gameIsRunning = false;

const getPlayerChoice = () => {
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

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const ComputerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, ComputerChoice);
  let messeage = `You picked ${playerChoice}, computer picked ${ComputerChoice}, therefor you `;
  if (winner === RESULT_DRAW) {
    messeage = messeage + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    messeage = messeage + 'won.';
  } else if (winner === RESULT_COMPUTER_WINS) {
    messeage = messeage + 'lost.';
  }
  alert(messeage);
  gameIsRunning = false;
});

// startGameBtn.addEventListener('click', playerCHoice);

const func = (a, b = 7) => a + b;

console.log(func(3));

let h = 4;

const func2 = (c) => c + h;

console.log(func2(5));
