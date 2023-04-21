const movieList = document.getElementById('movie-list');

// movieList.style['backgroundColor'] = 'red';
// movieList.style['background-color'] = 'red';
// movieList.style.display = 'block';

const person = {
  'first name': 'Amirhosein',
  age: 18,
  hobbies: ['coding', 'reading', 'trading'],
  greet: function () {
    console.log('Hi there!');
  },
  1.5: 'Hello!',
};

person.isAdmin = 'true';
// delete person.age;
// person.age = undefined;
person.age = null;

console.log(person);
console.log(person['first name']);
console.log(person[1.5]);

// person.greet();
