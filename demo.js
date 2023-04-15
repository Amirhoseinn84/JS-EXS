let inputElement = document.getElementById('product-name');
let charsElement = document.getElementById('remaining-chars');

// console.dir(inputElement);

let maxChars = inputElement.maxLength;

function updateRemaining(event) {
  let enteredText = event.target.value;
  // let enteredText = inputElement.value;
  let enteredTextLength = enteredText.length;
  // console.log(enteredText);

  let characters = maxChars - enteredTextLength;
  charsElement.textContent = characters;
  // console.log(characters);
}

inputElement.addEventListener('input', updateRemaining);
