// HTTP
// status

// method
// GET - получение информации
// POST - создает информацию, создать какой==-то ресурс
// DELETE - удалить ресурс

// Структура запроса
// url
//
// https(secure)              - протокол соединения
// www.amazon.de              - домен
// /new-releases              - path путь
// ?category=cars&max=12000   - параметры запроса. Query params


// протокол соедениения                   https
// домен                                  www.amazon.de
// путь path                              /new-releases
// параметры запроса, query params        ?category=cars&max=12000


function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.products[0]);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProducts();

function fetchProductById(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      console.log(product);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProductById(2);

// POST - используется для создания ресурса на бэкенде, часто для логина и регистрации
// попробуем сделать запрос на логин

fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  body: JSON.stringify({ username: "emilys", password: "emilyspass" }),
  headers: { "Content-Type": "application/json" },
//   Accept: "application/json", //
});
