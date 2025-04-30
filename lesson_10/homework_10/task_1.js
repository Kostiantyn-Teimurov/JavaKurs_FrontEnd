const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function changeFirstVsLast(array) {
  const array2 = [...array];
  array2[0] = array[array.length - 1];
  array2[array.length - 1] = array[0];
  return array2;
}

console.log(changeFirstVsLast(array1));
console.log(array1);

const animals = ["panda", "tiger", "coala", "canguroo"];

// const panda = animals[0];
// Диструктурируем массив - destructuring assignment of array
const [panda, _, coala] = animals;
console.log(panda);
console.log(coala);

const numbers = [1, 7, 3, 6, 5, 6];
const [, seven] = numbers;
console.log(seven);

// destructuring assignment of object
const admin = {
  email: "admin@gmail.com",
  age: 24,
  firstName: "Administrina",
  secondName: "Tiranikus",
};

// const email = admin.email;

const { email } = admin;
console.log(email);

const { age, secondName } = admin;
console.log(age, secondName);

const catPerson = {
  name: "Annamay",
  cats: ["Tom", "Garfield", "Barsik"],
};

console.log(catPerson);

const { cats } = catPerson;
console.log(cats);
const [, garfield] = cats;
console.log(garfield);

// const {cats: [, garfield]} = catPerson;
// console.log(garfield);

const arr = [[1, 2, 3], ["Igor", "John", "Bob"], { isDrunk: true }];
// 2, John, isDrunk

const [[, secondNumber], [, john], { isDrunk }] = arr;

console.log(secondNumber, john, isDrunk);