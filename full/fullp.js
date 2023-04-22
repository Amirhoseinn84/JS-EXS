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

const peron = new Person();
peron.greet();
