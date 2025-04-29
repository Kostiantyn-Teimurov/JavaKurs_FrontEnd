const students = [];
console.log(students);
const teachers = ["Sergey", "Alisher", "Igor"];
console.log(teachers);

const animals = new Array();
const plants = new Array("Camomile", "Dandelion", "Basil");
console.log(plants);

const firstTeacher = teachers[0];
console.log(firstTeacher);

console.log(teachers[10]); // undefined

const secondTeacher = teachers.at(1);
console.log(secondTeacher);

plants[3] = "Oak";
console.log(plants);

plants.push("Cactus");

console.log(plants.length);
plants[plants.length - 1] = "Rose";

const rose = plants.pop();
console.log(plants);
console.log(rose);


function createPersonalInfo(age, name, hairColor) {
    return [age, name, hairColor];
}

// shift - забирает эл в начале, unshift - добавляет эл в начало

const cars = ["BMW"];
cars.unshift("Mercedes");
console.log(cars);

const mercedes = cars.shift();



const cities = ["Berlin"];
const newCities = [...cities];
newCities.push("Hamburg");
console.log(cities);
console.log(newCities);

const array1 = ["a", "b", "c"];
const array2 = ["e", "f", "g"];
const alphabet = [...array1, ...array2];
console.log(alphabet);