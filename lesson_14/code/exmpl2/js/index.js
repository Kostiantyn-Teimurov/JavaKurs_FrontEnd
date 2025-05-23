// проверим подколючился ли скрипт
console.log("check");

let count = 0;

// получаем элементы в переменные
const infoBtn = document.getElementById("info-btn");
const removeInfoBtn = document.getElementById("remove-info-btn");

const infoMessage = document.createElement("p");
infoMessage.innerText = "This summer is not warm at all";
console.log(infoMessage); // <p>This summer is not warm at all</p>

// повесим слушатели событий

infoBtn.addEventListener("click", () => {
  // console.log("click-click"); // проверили

  // добавили вновь созданный элемент в body документа
  document.body.appendChild(infoMessage);
  count++;
  console.log(count);
});

// слушатель для кнопки удаления
removeInfoBtn.addEventListener("click", () => {
  // удалить элемент со страницы
  // чтобы удалить элемент нужно вызвать от него метод remove
  infoMessage.remove(); // убрали элемент со страницы - открепили
});

// в домашнем задании будет такой метод
const infoClone = infoBtn.cloneNode();
infoClone.id = "new-id-msg"; // заменили id
console.log("Склонированный узел, с измененным id", infoClone);
