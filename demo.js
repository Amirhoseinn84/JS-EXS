const inputElement = document.getElementById('product-name');
const charsElement = document.getElementById('remaining-chars');

// charsElement.className = 'classes';
// charsElement.style.fontSize = '30px';

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

  if (characters <= 10) {
    charsElement.classList.add('classes');
    inputElement.classList.add('classes');
    // charsElement.style.fontSize = '25px';
  } else {
    charsElement.classList.remove('classes');
    inputElement.classList.remove('classes');
  }
}

inputElement.addEventListener('input', updateRemaining);
