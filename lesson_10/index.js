let fruit = "apple";

let fruitUpper = fruit.toUpperCase();
console.log(fruitUpper); // APPLE

console.log(fruit[0]); // a
console.log(fruit.at(0)); // a

console.log(fruit[10]); // undefined // box natation == syntax
console.log(fruit.at(10)); // undefined

console.log(fruit.toLowerCase()); // apple  // pipeline

console.log("0".toLowerCase());
console.log("A".toLowerCase()); // a

console.log(fruit.charAt(0)); // a
console.log(fruit.charAt(7), "char at"); // пустой символ

console.log(fruit.charCodeAt(0)); // 97

// useful
// "pine" + "apple"
// concat - для объединения строк - создает новую строку из двух
const pine = "pine";
if (pine) {
  const pineapple = pine.concat(fruit);
  console.log(pineapple);
}

const email = " John@gmail.com  ";
console.log(email);
// trim обрезает пробелы и переносы строк leading - слева and trailing - в конце строки
console.log(email.trim().toLowerCase());
console.log(email.indexOf("@")); // 5 это индекс @
console.log(email.indexOf("$")); // -1

console.log(email.trimStart()); // "John@gmail.com  "
console.log(email.trimEnd()); // " John@gmail.com"

// pad
const cake = "Cake";
console.log(cake.padStart(10)); // "      Cake"
console.log(cake.length);
console.log(cake.padStart(10).length);
console.log(cake.padEnd(10)); // "Cake      "
console.log(cake.padEnd(10, "*")); // "Cake******"

// slice
const sliceOfCake = cake.slice(3);
console.log(sliceOfCake); // "e"
console.log(cake.slice(0)); // "Cake"
console.log(cake.slice(1)); // "ake"
// a piece of cake

console.log(cake.slice(1, 3)); // ak // правый индекс не включительно
console.log(cake.slice(-2)); // ke - начиная с конца строки
console.log("курочка".slice(-2)); // ka
console.log("улыбочка".slice(-2)); // ka

// substring
const animal = "panda";
console.log(animal.substring(2)); // nda // если указываем один параметр
// - то от индекса до конца строки

console.log(animal.substring(2, 4)); // nd - c какого по какой символ

console.log("курочка".substring(-2)); // курочка
// Выводы: slice удобнее потому что можно работать с отрицательными индексами

const token = "paper.bread.leaf";
const indexOfFirstDot = token.indexOf(".");
const indexOfLastDot = token.lastIndexOf("."); // чтобы найти индекс элемента справа
console.log(indexOfFirstDot);
console.log(indexOfLastDot);

// Напишем метод, который принимает имейл и возвращает
// имя пользователя - то есть все что идет до значка собачки
// getNameFromEmail
// "alisher-khamidov@gmail.com" --> alisher-khamidov

// доп задание
// учтите что слева и справа могут быть пробелы
//
// напишите метод getEmailService
// "alisher-khamidov@gmail.com" --> @gmail.com

// напишите метод getFirstName
// "alisher-khamidov@gmail.com" --> alisher

function getNameFromEmail(email) {
  const atIndex = email.indexOf("@");
  if (atIndex < 0) {
    throw new Error("Invalid email");
  }
  return email.slice(0, atIndex).trimStart();
}


try {
    console.log(getNameFromEmail("alisher-khamidov@gmail.com"));
    console.log(getNameFromEmail("alisher-khamidovgmail.com"));
    console.log("До этого кода мы не дойдем из-за ошибки");
} catch(e){
    console.error(e);
}

console.log("Дальше");
