const brothers = [
  { race: "hobbit", height: 110, age: 45, name: "Frodo Baggins" },
  { race: "human", height: 185, age: 46, name: "Aragorn" },
  { race: "elf", height: 189, age: 110, name: "Legolas" },
  { race: "dworf", height: 140, age: 150, name: "Gimly" },
  { race: "human", height: 195, age: 200, name: "Gandalf" },
];

const names = brothers.map((element) => element.name);
console.log(names);

const ages = brothers.map((element) => element.age);
console.log(ages);

const racesNames = brothers.map((brother) => brother.race + " " + brother.name);
console.log(racesNames);

const sizes = brothers.map((brother) => {
  if (brother.height >= 170) {
    return "Высокий";
  }
  return "Маленький";
});

console.log(sizes);

brothers.forEach((brother) => (brother.age += 1));
console.log(brothers);

brothers.forEach((brother) => (brother.name = brother.name.toUpperCase()));
console.log(brothers);

// map

// reduce

let sum = 0;
for(let i = 0; i < ages.length; i ++) {
    sum += ages[i];
}
console.log(sum);

const sum2 = ages.reduce((acc, current) => acc + current, 0);


const totalHeight = brothers.reduce((acc, brother) => acc + brother.height, 0);
console.log(totalHeight); // 819

const totalHeight2 = brothers
.map((brother)=> brother.height) // получили массив ростов
.reduce((acc, height) => acc + height, 0);
console.log(totalHeight2);


// split

const str = "Gandalf , Sauron , Legalas , Saruman , Elrond";
const namesArr = str.split(" , ");
console.log(namesArr);

// join
const newString = namesArr.join(" ");
console.log(newString);


// find - возвращает первое совпадение с заданным условием
const person = brothers.find((brother) => brother.race === "human")
console.log(person);


const person2 = brothers.find((brother) => brother.name === "Aragorn");
console.log(person2);


// filter
const oldBrothers = brothers.filter((brother) => brother.age > 100 && brother.race !== "human");
console.log(oldBrothers);


// destr
// const frodo = brothers[0];
const [frodo, aragorn, legolas, gimly, gandalf] = brothers;
console.log(aragorn);


const user = {id:1, email:"user@gmail.com", login: "funny_user"}
// const email = user.email;
const {email, id, login} = user;
console.log(email);