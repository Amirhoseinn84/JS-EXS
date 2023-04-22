let paragraphElement = document.querySelector('p');

function changeElement() {
  paragraphElement.textContent = 'Clicked!';
  console.log('Paragraph clicked!');
}

paragraphElement.addEventListener('click', changeElement);

let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
  // let enteredText = inputElement.value;
  let enteredText = event.target.value;
  // let enteredText = event.data;
  console.log(enteredText);
  // console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput);

///////////////////

const btn = document.querySelector('button');

// btn.onclick = function () {
//   console.log('Hi! there');
// };

// const buttonClickeHandler = () => {
//   alert('Button was clicked!');
// };

// btn.onclick = buttonClickeHandler;

// btn.addEventListener('click', () => {
//   console.log('HIii');
// });

const buttonClickeHandler = () => {
  console.log('Clicked!');
};

btn.addEventListener('click', buttonClickeHandler);

setTimeout(() => {
  btn.removeEventListener('click', buttonClickeHandler);
}, 2000);
