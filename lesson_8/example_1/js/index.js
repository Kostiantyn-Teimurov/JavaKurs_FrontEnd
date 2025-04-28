console.log("Hello, Alisher!");

// 7 примитивных типов
// тип number
let x = 6;

console.log(x);

let y = 12.5;
console.log(y);

x = y;
console.log(x);

// Тип String
x = "Ten";
console.log(x);
let name = "Alisher";

// gigInt
let z = 1234566n;

// Тип undefined не определен
let message;
console.log(message);

// Тип null
let secondName = null;

let isMale = true;
let isBigger = 10 > 4;
console.log(isBigger);

// Константы
const m = 12;
// m = 13; // Error

const COLOR_RED = "#F00";


// symbol
const symbol = Symbol("key")
console.log(symbol);


// Не примитив Object

const user = {
    "email": "khamidov@gmail.com"
};
console.log(user);


// Преобразование типов
// falsy values - те, которые преобразуются в false

// явное
// 10 -> "10"
let ten = 10;
let tenAsString = String(ten);
console.log(tenAsString);
console.log(typeof ten);
console.log(typeof tenAsString);
console.log(typeof tenAsString === 'string');


// неявное преобразование
let elevenAsString = 11 + ''; // '11'

// Приведение к числу
// '11' - 11
let eleven = Number(elevenAsString);
console.log(eleven);
console.log(typeof eleven);

let wrongNumber = Number("asdgsdgldghsd");
console.log(wrongNumber); // NaN - это особое значение
console.log(typeof NaN); // type number

if(x < Infinity) {
    console.log('Bla');
}
console.log(typeof Infinity); // тип number

// Самое интересное - преобразование в boolean
// явное
console.log(Boolean("Alisher")); // true
console.log(Boolean("12")); // true

// Falsy values
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
// console.log(Boolean(-0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false


// неявное
const myMoneyPoint = 12;
const myBrotherMoneyPoint = 0;

if(myMoneyPoint) {
    console.log('I\'m rich');
}


if(myBrotherMoneyPoint) {
    console.log('I\'m rich');  // недостижимый код - не выполнится
}

let myUser = null;
if(user) {
    console.log('User exists');
}

myUser = {email: "user@gmail.com"};
if(myUser) {
    console.log(myUser.email);
}


// Шаблонные строки

const myAge = 31;
const myName = "Alisher";

// const text = "Меня зовут " + myName + "Мне " + myAge + " лет.";
const text = `Меня зовут ${myName}, Мне ${myAge} лет.`;  // backticks - обратные кавычки
console.log(text);
