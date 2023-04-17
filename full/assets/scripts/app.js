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

function add(num1, num2) {
  let calculateNum = num1 + num2;
  return calculateNum;
}

let calNum = add(8, 4);
// console.log(calNum);

// outputResult(calNum, userData);

const defaultResult = 0;
let currentResult = defaultResult;

function getUserData() {
  return parseInt(userInput.value);
}

function add2() {
  const enteredNumber = getUserData();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add2);
