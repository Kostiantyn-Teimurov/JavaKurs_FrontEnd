function firstSymbolToUpper(array) {
    const firstString = array[0];
    array[0] = firstString[0].toUpperCase() + firstString.slice(1);
}

const array = ["apple", "orange"];

firstSymbolToUpper(array);

console.log(array);