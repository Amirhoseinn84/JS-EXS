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
