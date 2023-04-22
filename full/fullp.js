// class Person {
//   name = 'Amirhosein';

//   constructor() {
//     this.age = 18;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }

function Person() {
  this.age = 18;
  this.name = 'Amirhosein';
  this.greet = function () {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  };
}

Person.prototype = {
  printAge() {
    console.log(this.age);
  },
};

console.dir(Person);

const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__ === Person.prototype);
