const person = {
  name: 'Amirhosein',
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
console.log(person.age);

// person.greet();
