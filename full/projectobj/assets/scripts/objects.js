const movieList = document.getElementById('movie-list');

movieList.style['backgroundColor'] = 'red';
movieList.style.display = 'block';

const person = {
  'first name': 'Amirhosein',
  age: 18,
  hobbies: ['coding', 'reading', 'trading'],
  greet: function () {
    console.log('Hi there!');
  },
};

person.isAdmin = 'true';
// delete person.age;
// person.age = undefined;
person.age = null;

console.log(person);
console.log(person['first name']);

// person.greet();
