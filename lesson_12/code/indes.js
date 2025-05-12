// Object
// key - value

const user = { email: "john@gmail.com" };
const age = 18;

// user = { email: "bob@gmail.com" }; // ошибка

// изменил значение свойства объекта
user.email = "john2@yahoo.org";

console.log(user);

// как добавить в объект новое свойство
user.eyeColor = "brown";

console.log(user);

// "hair color" - так делать не стоит
user["hair color"] = "yellow"; // box syntax

console.log(user);
const { "hair color": color } = user; // деструктуризация, если с пробелом

console.log(color);

// Пример того, как можно создавать объект из переменных

const pandaName = "Po";
const favouriteFood = "bamboo";

const panda = {
  name: pandaName,
  favouriteFood, // short syntax - если имя переменной совпадает с ключем, который мы хотим выбрать
};

console.log(panda); // { name: 'Po', favouriteFood: 'bamboo' }

// Создайте переменную рост назовите ее bobHeigh и пусть будет равна 184
// создайте объект bob с ключем height в котором будет лежать значение bobHeigh
const bobsHeight = 184;
const bob = {
  height: bobsHeight,
};

// динамический ключ - ключ, который лежит внутри переменной
const key1 = "name";
const giraffeSam = {
  name: "Sam",
  age: 7,
};
console.log(giraffeSam.key1); // undefined
console.log(giraffeSam[key1]); // giraffeSam.email

const keys = ["name", "age"];
for (let i = 0; i < keys.length; i++) {
  console.log(giraffeSam[keys[i]]);
}

// Какие у объекта есть ключи?

// список ключей объекта
const keysOfGiraffe = Object.keys(giraffeSam);
console.log(keysOfGiraffe); // [ 'name', 'age' ]

//  список значений объекта
const valuesOfGiraffe = Object.values(giraffeSam);
console.log(valuesOfGiraffe); // [ 'Sam', 7 ]

// entries - пары ключ-значение
const entries = Object.entries(giraffeSam);
console.log(entries); // [ [ 'name', 'Sam' ], [ 'age', 7 ] ]

// freeze
const breakfast = {
  title: "omlet",
  calories: 1200,
};

Object.freeze(breakfast);
// Можем ли добавить новый ключ после заморозки? нет
breakfast.warm = true; //{ title: 'omlet', calories: 1200 }

console.log(breakfast.warm); // undefined
console.log(breakfast);

// Можем ли мы изменить значения уже бывших свойств? нет
breakfast.title = "cereal";
console.log(breakfast); // { title: 'omlet', calories: 1200 }

// Object seal
const dinner = {
  title: "pasta",
  colories: 2000,
};
Object.seal(dinner);

// Могу ли добавить новое свойство? нет
dinner.fat = true; // не добавилось
console.log(dinner); // { title: 'pasta', colories: 2000 }

// Могу ли изменить старые свойста? да
dinner.colories += 200; // увеличили

console.log(dinner); // { title: 'pasta', colories: 2200 }

// Object create - можем создавать объекты
const musician = Object.create({ name: "Freddie Mercury" });
console.log(musician); // {}
console.log(musician.name); // Freddie Mercury

// поговорим про прототипное наследование позже

const address = {
  street: "Pfondorfer",
  number: 12,
};

const firma = {
  title: "Horns and hoofs",
};

Object.assign(firma, address); // копирует свойства у адреса и добавляет их в фирму

console.log(firma); // { title: 'Horns and hoofs', street: 'Pfondorfer', number: 12 }

address.post = 10407;
console.log(firma);

// аналог того же самого это SPREAD OPERATOR, но немного иначе

const personalInfo = {
  name: "Fedor",
};

const medicalInfo = {
  bloodType: 1,
};

const fedor = {
  ...personalInfo, // скопировали поля из объекта personalInfo при помощи спреда
  ...medicalInfo, // скопировали поля из объекта medicalInfo
  age: 19, // указали ручками ключ значение
};

console.log(fedor);

// создайте метод - который принимает объект и две параметра типа строка
// первый из них это будущий ключ, второй - будущее значение

// Пусть метод возвращет новый объкт с добавлением указанного поля со значением.

// unify({email: "bob@gmail.com"}, "eyeColor", "brown")
// ---> {email: "bob@gmail.com", eyeColor:"brown"}

function unify(obj, additionalKey, additionalValue) {
  //   const newObj = {...obj};
  //   newObj[additionalKey] = additionalValue;
  //   return newObj;

  return { ...obj, [additionalKey]: additionalValue };
}

const unnifyV2 = (obj, additionalKey, additionalValue) => {
  return { ...obj, [additionalKey]: additionalValue };
};

const book = { title: "The Lord Of The Rings" };

const newBook = unify(book, "author", "Tolkien JR");

newBook.title = "Harry Potter";
console.log(newBook);
console.log(book);
