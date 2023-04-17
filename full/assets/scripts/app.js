let calculateNum = 2;

calculateNum += 4;

// let userData = `(${calculateNum} * 20)`;

let userData = '(' + calculateNum * 2 + ')';

let textInput = 'error' + ' ' + 'occured!';

outputResult('', userData);

function userName(name, last) {
  let nameUser = 'Hi!' + ' ' + name + ' ' + last;
  console.log(nameUser);
  return nameUser;
}

let inpuUser = userName('Amirhosein', 'Halimi');
