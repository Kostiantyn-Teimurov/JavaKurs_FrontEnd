// JSON
// JavaScript object notation

const user = {
  name: "john",
  email: "john@gmail.com",
  age: 18,
};

// основной формат передачи и хранения информации - это JSON

const userAsJSONString = JSON.stringify(user);
console.log(userAsJSONString); // {"name":"john","age":18}

const userFromJson = JSON.parse(userAsJSONString);
console.log(userFromJson); // { name: 'john', age: 18 }

