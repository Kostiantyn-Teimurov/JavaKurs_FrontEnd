function formatString(input) {
    const regex = /(\d{4})\.(\d{3})\.(\d{3})\s(\d{2})/;
     return input.replace(regex, `$1 $2:$3-$4`);
}

const str = "1333.132.123 00";
const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"






// const regex = /(\d{4})\.(\d{3})\.(\d{3})\s(\d{2})/;

// console.log(regex.test(str));
// const replaced = str.replace(regex, `$1 $2:$3-$4`)

// console.log(replaced);