const inputElement = document.getElementById('product-name');
const charsElement = document.getElementById('remaining-chars');

// console.dir(inputElement);

const maxChars = inputElement.maxLength;

function updateRemaining(event) {
  const enteredText = event.target.value;
  // let enteredText = inputElement.value;
  const enteredTextLength = enteredText.length;
  // console.log(enteredText);

  const characters = maxChars - enteredTextLength;
  charsElement.textContent = characters;
  // console.log(characters);
}

inputElement.addEventListener('input', updateRemaining);
