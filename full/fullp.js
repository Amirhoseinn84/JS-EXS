class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Amirhosein';

  constructor() {
    super();
    this.age = 18;
  }

  greet() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
    // setTimeout(this.greet, 3000);
    const setTimeEl = setInterval(() => {
      console.log('Sending data...');
    }, 3000);
  }

  // greet = () => {
  //   console.log(
  //     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
  //   );
  // };
}
// function Person() {
//   this.age = 18;
//   this.name = 'Amirhosein';
//   this.greet = function () {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   };
// }

// Person.describe = function () {
//   console.log('Creating persons...');
// };

// // Person.prototype = {
// //   printAge() {
// //     console.log(this.age);
// //   },
// // };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person);
// console.log(person.__proto__);
// // console.log(person.__proto__ === Person.prototype);

// const person2 = new person.__proto__.constructor();
// console.log(person2);

// console.dir(Object.prototype);

const p = new Person();
p.greet();

const buttonElment = document.getElementById('btn');
buttonElment.addEventListener('click', p.greet.bind(p));
// clearInterval(p.greet);
// clearTimeout(p.greet);

const course = {
  title: 'JavaScript - The Complete Guide',
  rating: 5,
};

// console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

course.printRating();

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Amir',
      writable: false,
    },
  }
);

student.name = 'Amir';

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress();
console.log(student);

/////////////////////////

// const someScript = document.createElement('script');
// const timeEl = (someScript.textContent = 'alert("Hi there!")');
// document.head.append(someScript);

/////////////////////////

// setTimeout(timeEl, 3000);

// setInterval(() => {
//   console.log('Sending data...');
// }, 3000);

// location.href = 'https://google.com';
// history.back();
// location.replace = 'https://google.com';

console.log(navigator.userAgent);

navigator.geolocation.getCurrentPosition((data) => {
  console.log(data);
});

const dateEL = new Date();
console.log(dateEL.getTime());

const dateEL2 = new Date('11 / 09 / 20');
console.log(dateEL2);

const customError = new Error('Sth Went Wrong!');
customError.code = 404;
console.log(customError);
console.dir(customError);
