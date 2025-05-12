const student = {
    age: 22,
    name: "Vasia",
}

const product = {
    title: "iphone",
    price: 2000,
    "model of phone": "XR"
}

console.log(product.price);
console.log(product["model of phone"]);

product.diagonal = 6.5;
product["type of adapter"] = "USB-C";
console.log(product);


let key = "age";
console.log(student[key]);
key = "name3";
console.log(student[key]);


const title = "Titanic";
const capacity = 1500;

const titanic = {
    title, capacity
}
console.log(titanic);



const name1 = "Avrora";
const cap = "300";

const avrora = {
    title: name1,
    capacity: cap,
}

console.log(avrora);
