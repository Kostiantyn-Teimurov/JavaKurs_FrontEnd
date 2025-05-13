// Task1
function validate(str) {
  if (str.match(/^[a-z]19[0-9][0-9]born$/)) {
    return true;
  }
  return false;
}

function validate2(str) {
    const pattern = (/^[a-z]19[0-9][0-9]born$/);
    return pattern.test(str);
}

str1 = "c1986born"; // true
str2 = "b1988born"; // true
str3 = "1986born"; // false — нет начальной буквы
str4 = "c1886born"; // false — не 19XX
str5 = "c1986bor"; // false — не заканчивается на 'born'

console.log(validate(str1));
console.log(validate(str2));
console.log(validate(str3));
console.log(validate(str4));
console.log(validate(str5));


console.log('=============== Validate with test() ==========');
console.log(validate2(str1));
console.log(validate2(str2));
console.log(validate2(str3));
console.log(validate2(str4));
console.log(validate2(str5));
console.log('===============');


// Task2
const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";
console.log(sentence.replace(/javascript/gi, "TypeScript"));