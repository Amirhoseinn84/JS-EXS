const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(1, 8);
console.log(moreNumbers);

const moreNumbersInput = new Array(6);
console.log(moreNumbersInput);

const moreNumbersInput2 = Array(2, 3);
console.log(moreNumbersInput2);

const yetMoreNumbers = Array.of(3, 4);
console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

// const moreMoreNumbers = Array.from([1, 2, 3, 4, 5]);
const moreMoreNumbers = Array.from('Amir');
console.log(moreMoreNumbers);

const listItem = Array.from(listItems);
console.log(listItem);

const hobbies = ['sports', 'reading'];
console.log(hobbies);

const personalData = [18, 'Amir', { moreDetails: [] }];
console.log(personalData);

const analyticsData = [
  [1, 3],
  [7, 9],
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
  // console.log(analyticsData);
}

const morearr = ['coding', 'reading'];
// morearr.push('cooking');
// morearr.unshift('trading');
// morearr.pop();
// morearr.shift();
// morearr[2] = 'trading';

morearr.splice(1, 0, 'food');
morearr.splice(-2, 1);

console.log(morearr);

const testResult = [2, 1.5, 2.3, -8, 2.3, 8.9];
// const storedResult = testResult.slice(0, 3);
const storedResult = testResult.concat([1.2, 10]);

testResult.push(7.9);

console.log(storedResult, testResult);
console.log(testResult.indexOf(8.9));

console.log(testResult.includes(2.3));
console.log(testResult.indexOf(2.3) !== -1);

const personalData2 = [{ name: 'Amir' }, { name: 'Amirhosein' }];
// console.log(personalData2.indexOf({ name: 'Amirhosein' }));

const amir = personalData2.find((person, idx, persons) => {
  return person.name === 'Amir';
});

amir.name = 'Arshiya';

console.log(amir, personalData2);

const amirhoseinIndex = personalData2.findIndex((person, idx, persons) => {
  return person.name === 'Amirhosein';
});

console.log(amirhoseinIndex);

const prices = [8.99, 4.99, 2.99, 1.99];
const tax = 0.19;
const taxAdjustedPrices = [];
const anotherTaxAdjustedPrices = [];

// for (const price of prices) {
// taxAdjustedPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);

prices.forEach((price) => {
  const anotherObj = { new: price * 2 };
  anotherTaxAdjustedPrices.push(anotherObj);
});

console.log(anotherTaxAdjustedPrices);

const adjustedNumber = prices.map((price) => {
  const anotherObj = price * 2;
  return anotherObj;
});

console.log(adjustedNumber);

const adjustedNumber2 = prices.map((price) => price * 2);
console.log(adjustedNumber2);

// const sortedPrice = prices.sort();
// console.log(sortedPrice);

const sortedPrice = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

// console.log(sortedPrice);
console.log(sortedPrice.reverse());

const filteredArray = prices.filter((price) => price > 3);
console.log(filteredArray);

const filteredArrayy = prices.filter((p) => p > 2);
console.log(filteredArrayy);

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

// const sum = prices.reduce((prevValue, curValue) => {
//   return prevValue + curValue;
// }, 0);

// console.log(sum);

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum);

const data = 'NEWYORK;11.99;2000';

const tranformedData = data.split(';');
tranformedData[1] = +tranformedData[1];
console.log(tranformedData);
