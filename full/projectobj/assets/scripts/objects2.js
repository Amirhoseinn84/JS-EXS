const movieList = document.getElementById('movie-list');

// movieList.style['backgroundColor'] = 'red';
// movieList.style['background-color'] = 'red';
// movieList.style.display = 'block';

const userChosenKeyname = 'level';

const person = {
  'first name': 'Amirhosein',
  age: 18,
  [userChosenKeyname]: '...',
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

const keyName = 'first-name';

console.log(person);
// console.log(person['first name']);
console.log(person[keyName]);
console.log(person[userChosenKeyname]);
console.log(person[1.5]);

// person.greet();

const person1 = {
  name: 'Amirhosein',
  hobbies: ['reading', 'cooking'],
  info: {
    title: 84,
  },
};

console.log(person1);

const person2 = person1;

person1.age = 18;

console.log(person2);

const anotherPerson = { ...person1 };

anotherPerson.play = 'soccer';

console.log(anotherPerson);

person1.hobbies.push('coding');

console.log(person1);

const person3 = { ...person1, age: 17, hobbies: [...person1.hobbies] };

person3.hobbies.pop();

console.log(person3);

const people1 = { name: 'Amirhosein' };

const people2 = Object.assign({}, people1);

console.log(people2);

people1.name = 'Amir';

console.log(person1);

const { hobbies, ...otherProps } = person1;

const { info: infoTitled } = person1;

console.log(hobbies, otherProps);

console.log(infoTitled);

if ('info' in person1) {
  console.log(infoTitled);
}

if (person1.hobbies !== undefined) {
  console.log(person1.hobbies);
}
