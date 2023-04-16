for (let i = 0; i < 10; i++) {
  console.log(i);
}

const userInput = ['Amirhosein', 'Arshiya'];

for (const userName of userInput) {
  console.log(userName);
}

const loggedUser = {
  name: 'Amirhosein',
  Age: 18,
  isLoggedIn: true,
};

for (const nameUser in loggedUser) {
  console.log(nameUser);
  console.log(loggedUser[nameUser]);
}
