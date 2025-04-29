const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function changeFirstVsLast(array) {
    const array2 = [...array];
    array2[0] = array[array.length - 1];
    array2[array.length - 1] = array[0];
    return array2;
}

console.log(changeFirstVsLast(array1));
console.log(array1);