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
