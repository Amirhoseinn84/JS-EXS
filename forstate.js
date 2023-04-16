for (let i = 0; i < 10; i++) {
  console.log(i);
}

const userInput = ['Amirhosein', 'Arshiya', 'Alireza'];

for (const namee of userInput) {
  console.log(namee);
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
