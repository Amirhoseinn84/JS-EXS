const userInput = 'Amirhoseinn';

if (userInput === 'Amirhosein') {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
} else if (userInput === 'Amirr') {
  for (let i = 0; i < 20; i++) {
    console.log(i);
  }
} else {
  for (let i = 0; i < 6; i++) {
    console.log(i);
  }
  console.log('Failed!');
}

let isUserInput = false;

if (!isUserInput) {
  console.log('User is logged in!');
}

const userNameInput = 'Amirhosein';

if (userNameInput.length > 0) {
  console.log('User is valid!');
}
