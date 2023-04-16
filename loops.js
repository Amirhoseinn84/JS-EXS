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

const highlightLinksButtonElement = document.querySelector(
  '#highlight-links button'
);

const anchorElements = document.querySelectorAll('#highlight-links a');

function hgihlightLinks() {
  for (const anchorElement of anchorElements) {
    anchorElement.classList.add('highlight');
  }
}

highlightLinksButtonElement.addEventListener('click', hgihlightLinks);
