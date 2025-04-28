const myAge = 25;
switch (myAge) {
  case 1:
    console.log("малыш");
    break;
  case 2:
    console.log("ползунок");
    break;
  case 5:
    console.log("дошкольник");
    break;
  case 16:
    console.log("подросток");
    break;
  case 45:
    console.log("зрелый");
    break;
  default:
    console.log("Отличный возраст!");
}

console.log(12 - 3 + true + "12" + Boolean(NaN));
// 9 + true + "12" + Boolean(NaN)
// 9 + 1 + "12" + Boolean(NaN)
// "1012" + Boolean(NaN)
// 1012false

function greet(secondName = "Dowson") {
    return `Hi, ${secondName}! How are you?`;
}

console.log(greet());


function greet2(secondName) {
    return `Hi, ${secondName ? secondName : "Dowson"}! How are you?`;
}