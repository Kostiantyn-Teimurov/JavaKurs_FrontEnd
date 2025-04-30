for (let i = 100; i >= 0; i -= 3) {
  console.log(i);
}

function printNumbers(x) {
  for (let i = x; i >= 0; i -= 3) {
    console.log(i);
  }
}

printNumbers(2);

const animals = ["panda", "wolf", "fox"];

let x = 0;
while (x < animals.length) {
  animals[x] = animals[x].toUpperCase();
  x++;
}

console.log(animals);


// for ... of
for(let animal of animals) {
    console.log(animal);
}

animals.forEach((a) => {
    console.log(a);
});