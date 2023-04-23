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

const button = document.querySelector('button');

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

// const buttonClickeHandler = () => {
//   console.log('This was clicked!');
// };

// const buttonClickeHandler = (event) => {
//   console.log(event);
// };

// const boundFn = buttonClickeHandler.bind(this);

// button.addEventListener('click', buttonClickeHandler);
// button.addEventListener('mouseenter', buttonClickeHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickeHandler);
// }, 2000);

// // window.addEventListener('scroll', (event) => {
// //   console.log(event);
// // });

const from = document.querySelector('form');

from.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', (event) => {
  console.log('CLICKED DIV!');
  console.log(event);
});

// button.addEventListener('click', (event) => {
//   event.stopPropagation();
//   // event.stopImmediatePropagation();
//   console.log('CLICKED BUTTON!');
//   console.log(event);
//   console.log(this);
// });

button.addEventListener('click', function (event) {
  event.stopPropagation();
  // event.stopImmediatePropagation();
  console.log('CLICKED BUTTON!');
  console.log(event);
  console.log(this);
});

const listItems = document.querySelector('li');
const listItems2 = document.getElementById('item-2');
const listItems3 = document.querySelector('ul');

// listItems.addEventListener('click', (event) => {
//   event.target.textContent = 'Amir';
//   listItems.style.backgroundColor = 'red';
//   console.log(event);
// });

// listItems2.addEventListener('click', (event) => {
//   event.target.textContent = 'Amir';
//   listItems.style.backgroundColor = 'yellow';
//   console.log(event);
// });

listItems3.addEventListener('click', (event) => {
  // event.target.textContent = 'Amirhosein';
  event.target.closest('li').textContent = 'Amirhosein';
  // // listItems3.style.color = 'blue';
  console.log(event);
  console.log(event.currentTarget);
  // from.submit();
  button.click();
});

///////////////////

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

function devide(x, y) {
  return Math.pow(x, y);
}

function devide2(x, y) {
  return x ** y;
}

console.log(devide2(2, 3));
console.log(devide(2, 3));

const devideEl = (x, y) => Math.pow(x, y);
console.log(devideEl(2, 3));

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);

  let priceCategory = 'Pretty cheap regarding its price';
  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = 'Javascript Course';
const prodePrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodePrice}.`;

console.log(productOutput);

/////////////

const regax = /^\S+@\S+\.\S+$/;

regax.test('test@test.com');

console.log(regax.test('test@test.com'));
