function addPrefix (strings, prefix) {
    const changedStrings = [...strings];
    for(i = 0; i < strings.length; i++) {
        changedStrings[i] = prefix + strings[i];
    }
    return changedStrings;
}
const strings = ["apple", "orange", 1];

console.log(addPrefix(strings, "pine"));
console.log(strings);