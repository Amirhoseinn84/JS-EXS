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

////////////////////////////////

const defaultResult = 0;
let currentResult = defaultResult;
let addArray = [];

function getUserData() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function getToWrite(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  addArray.push(logEntry);
  console.log(addArray);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserData();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTI') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  getToWrite(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
  // const enteredNumber = getUserData();
  // const initialResult = currentResult;
  // currentResult += enteredNumber;
  // createAndWriteOutput('+', initialResult, enteredNumber);
  // getToWrite('ADD', initialResult, enteredNumber, currentResult);
}

function sub() {
  calculateResult('SUBTRACT');
  // const enteredNumber = getUserData();
  // const initialResult = currentResult;
  // currentResult -= enteredNumber;
  // createAndWriteOutput('-', initialResult, enteredNumber);
  // getToWrite('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function mul() {
  calculateResult('MULTI');
  // const enteredNumber = getUserData();
  // const initialResult = currentResult;
  // currentResult *= enteredNumber;
  // createAndWriteOutput('*', initialResult, enteredNumber);
  // getToWrite('MULTI', initialResult, enteredNumber, currentResult);
}

function div() {
  calculateResult('DIVIDE');
  // const enteredNumber = getUserData();
  // const initialResult = currentResult;
  // currentResult /= enteredNumber;
  // createAndWriteOutput('/', initialResult, enteredNumber);
  // getToWrite('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', div);

//////////////////////////////

// let arraies = [];
// arraies = [1, 2, 3, 4];

// console.log(arraies[1]);

let arraies = [1, 2, 3];

arraies.push(8, 9);

console.log(arraies);
