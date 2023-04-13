// let greetingText = "Hi, I'm Amirhosein!";

// let userYear = 84;

// alert(greetingText);

// greetingText = 'Hi, I am really Amirhosein';

// alert(greetingText);

// alert(userYear);

// let hobbies = ['sports', 'reading', 'cooking'];

// alert(hobbies[0]);

// let UserInf = {
//   job: 'Developer',
//   place: 'New York',
// };

// alert(UserInf.job);

// let age = 18;

// let adultYears = age / 9;

// alert(adultYears);

// age = 28;

// adultYears = age / 2;

// alert(adultYears);

// let age = 18;

// let adultYears;

// function calculateAdultsYears() {
//   adultYears = 28 - age;
// }

// calculateAdultsYears();
// alert(adultYears);

// age = 20;

// calculateAdultsYears();
// alert(adultYears);

// let age = 18;

// let adultYears;
// let dateYears;

// function calculateAdultsYears() {
//   return 28 - age;
// }

// adultYears = calculateAdultsYears();
// alert(adultYears);

// age = 20;
// dateYears = calculateAdultsYears();
// alert(dateYears);

let age = 18;
let ageIn = 28;

function calculateAdultsYears(userAge, ageInput) {
  let yearsInput = ageInput - userAge;
  return yearsInput;
}

let adultYears = calculateAdultsYears(age, ageIn);
console.log(adultYears);

let dateYears = calculateAdultsYears(20, 21);
console.log(dateYears);

let person = {
  name: 'Amirhosein',
  greet() {
    console.log('Hello!');
  },
};

person.greet();
