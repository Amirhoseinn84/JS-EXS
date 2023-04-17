let calculateNum = 2;

calculateNum += 4;

// let userData = '(' + calculateNum * 4 + ')';

let userData = `(${calculateNum} * 20)`;

let textInput = 'error' + ' ' + 'occured!';

function userName(name, last) {
  let nameUser = 'Hi!' + ' ' + name + ' ' + last;
  return nameUser;
}

let inpuUser = userName('Amirhosein', 'Halimi');
console.log(inpuUser);

function add(num1, num2) {
  let calculateNum = num1 + num2;
  return calculateNum;
}

let calNum = add(8, 4);
// console.log(calNum);

outputResult(calNum, userData);
