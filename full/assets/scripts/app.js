let calculateNum = 2;

calculateNum += 4;

// let userData = '(' + calculateNum * 4 + ')';

let userData = `(${calculateNum} * 20)`;

let textInput = 'error' + ' ' + 'occured!';

function userName(name, last) {
  let nameUser = 'Hi!' + ' ' + name + ' ' + last;
  return nameUser;
}

let inpuUser = userName('Amirhosein', 'Halimi');
console.log(inpuUser);

function addd(num1, num2) {
  let calculateNum = num1 + num2;
  return calculateNum;
}

let calNum = addd(8, 4);
// console.log(calNum);

// outputResult(calNum, userData);

const defaultResult = 0;
let currentResult = defaultResult;

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function getUserData() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserData();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
}

function sub() {
  const enteredNumber = getUserData();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function mul() {
  const enteredNumber = getUserData();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function div() {
  const enteredNumber = getUserData();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', div);
