const calculateSumButtonElement = document.getElementById('button-Element');
const userNumberInputElement = document.getElementById('user-number');
const outputResultElement = document.getElementById('calculated-sum');

function calculateSum() {
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);

/////

const highlightLinksButtonElement = document.getElementById('button-Element2');
const anchorElements = document.querySelectorAll('#highlight-links a');

function hgihlightLinks() {
  for (const anchorElement of anchorElements) {
    anchorElement.classList.add('highlight');
  }
}

highlightLinksButtonElement.addEventListener('click', hgihlightLinks);

/////

const dummyUserData = {
  firstname: 'Amirhoein',
  lastname: 'Halimi',
  Age: 18,
};

const displayUserDataButtonElement =
  document.querySelector('#user-data button');
const outputDataElement = document.getElementById('output-user-data');

function displayUserData() {
  outputDataElement.innerHTML = '';

  for (const key in dummyUserData) {
    const newUserDataList = document.createElement('li');
    const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
    newUserDataList.textContent = outputText;
    outputDataElement.append(newUserDataList);
  }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);

/////

const rollDiceButtonElement = document.querySelector('#statistics button');
const targetNumberInputElement = document.getElementById('user-target-number');
const diceRollsListElement = document.getElementById('dice-rolls');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = '';

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollListItemElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById('output-total-rolls');
  const outputTargetNumberElement = document.getElementById(
    'output-target-number'
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);
