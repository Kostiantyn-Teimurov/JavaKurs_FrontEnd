function swapKeysVsValues (obj) {
    const newObj = {};
    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);
    for (let i = 0; i < objKeys.length; i++) {
        newObj[objValues[i]] = objKeys[i];
    }
    return newObj;
}

const obj = {
    email: "sagh3",
    pas: "4545ht",
    age: 14,
    name: "wlrgg",
}

console.log(swapKeysVsValues(obj));