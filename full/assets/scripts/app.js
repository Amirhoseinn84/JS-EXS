let calculateNum = 2;

calculateNum += 4;

// let userData = `(${calculateNum} * 20)`;

let userData = '(' + calculateNum * 2 + ')';

let textInput = 'error' + ' ' + 'occured!';

outputResult(textInput, userData);

function userName(name) {
  let nameUser = 'Hi!' + ' ' + name;
  return nameUser;
}

let inpuUser = userName('Amirhosein');
console.log(inpuUser);
