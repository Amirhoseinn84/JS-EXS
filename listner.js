let paragraphElement = document.querySelector('p');

function changeElement() {
  paragraphElement.textContent = 'Clicked!';
  console.log('Paragraph clicked!');
}

paragraphElement.addEventListener('click', changeElement);

let inputElement = document.querySelector('input');

function retrieveUserInput() {
  let enteredText = inputElement.value;
  console.log(enteredText);
}

inputElement.addEventListener('input', retrieveUserInput);
