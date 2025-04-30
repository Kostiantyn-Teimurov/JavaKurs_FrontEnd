// call
sayHi();
// hoisting = поднятие
// Когда вызов может быть раньше в коде, чем сама декларация функции

// function declaration
function sayHi() {
  console.log("Hi!");
}

console.log(x); // undefined - hoisting var
var x = 10;
// const, let - не работает

// sayGoodBye(); // не сработает hoisting
// Functional expression
const sayGoodBye = function () {
  console.log("Bye bye");
};
sayGoodBye();

function butler(action) {
  action();
}

butler(sayHi);
butler(sayGoodBye);

function neighbour(action, thing) {
  action(thing);
}

const party = function (track) {
  console.log("Tuc-tuc-tuc" + track);
};

const drill = function (item) {
  console.log("I drill " + item);
};

neighbour(party, "Britney Spears");
neighbour(drill, "wall");



// calculator
function calculator(operation, a, b) {
    return operation(a, b);
};

function add(a, b) {
    return a + b;
};
function devide(a, b) {
    return a / b;
};

console.log(calculator(add, 9, 7));
console.log(calculator(devide, 9, 7));

// anonymus function
// пример с вычитанием

const res = calculator(function(a, b) {return a - b}, 9, 4);
console.log(res);

const res1 = calculator((a, b) => a-b, 9, 4);
// arrow function - стрелочная функция
const multiply = (a, b) => a * b;

const multiply2 = (a, b) => {
    return a * b;
};

// Стрелочная ф-ция, которую передали в качестве параметра в другую ф-ю - колбек

// Степень
const power = (a, b) => a ** b;

const twoPowerOrThree = calculator(power, 2, 3);
console.log(twoPowerOrThree); // 8


function pirate (operation, item) {
    operation(item);
}

const drinkSmth = (a) => {
    console.log("I drink " + a);
};

const swim = (vehicle) => {
    console.log("I roam sees with my " + vehicle);
};

pirate(swim, "ship");
pirate(drinkSmth, "rom");
pirate(swim, "barrel");
pirate(drinkSmth, "water");
