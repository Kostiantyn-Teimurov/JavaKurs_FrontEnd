const heading = document.getElementById("heading");
const imgPirate = document.getElementById("pirate-picture");
const favDrinkElement = document.getElementById("favouriteDrink");
const parrotsContainer = document.getElementById("parrots-container");

// fetch("https://alisherkhamidov.github.io/fake-pirate/joe-sparrow.json")
// // феч вернул промис респонса - Promise<res>
//   .then((res) => res.json())

//   // мы раскрыли джсоном (асинхронным методом) - возвращает еще один промис - Promise<obj>
//   .then((data) => {
//     console.log(data);
//   });

//   // method: GET
//   // создать - метод POST

fetch("https://alisherkhamidov.github.io/fake-pirate/joe-sparrow.json")
  .then((res) => {
    // console.log(res.status);
    // console.log(res.ok); // true if 200-299
    // console.log(res);

    // Детальный разбор ошибки 404:
    // if (res.status === 404) {
    //   throw new Error("Custom not found message");
    // }
    // return res.text(); // вернул бы строку json как есть - с кавычками

    // Общая проверка:
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((data) => {
    // console.log(JSON.parse(data)); // парсим, если возвращаем текст

    // ОБЯЗАТЕЛЬНО посмотрите чем является тело ответа
    console.log(data); // выводим раскрытый джсон
    // const name = data.name;
    // достали всю инфу с помощью деструктуризации
    const { name, url, favouriteDrink, parrots } = data;
    heading.innerText = name;
    imgPirate.src = url;
    imgPirate.style.width = "200px";
    favDrinkElement.innerText = favouriteDrink;

    parrots.forEach((parrot) => {
        const parrotCard = document.createElement("li");
        parrotCard.innerText = parrot.name;
        parrotsContainer.appendChild(parrotCard);
    })
  })
  .catch((err) => {
    console.log(err.message); // "Custom not found message"
  });

// HTTP - протокол клиент-серверного взаимодействия - это правила того как делать запросы и ответы (как себя вести) - свод правил
// Статусы: (res.status)
// 200 - успех - получили ответ
// 400 - Bad request
// 401 - UnAuthorized
// 403 - доступ запрещен
// 404 - Not found
// 500 - Server error

// 200-299 - положительные статусы ответов
// 300-400 - редирект(перенаправлено). Сделали на один адрес запрос - перенаправили на другой адрес
// 400-500 - ошибки
