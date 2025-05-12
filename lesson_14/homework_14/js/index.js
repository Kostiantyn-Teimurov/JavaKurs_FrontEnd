// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

console.log(clonedBtn);
const div = document.getElementById("container");

btn.addEventListener("click", () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь

  clonedBtn.classList.add("second-btn");
  clonedBtn.textContent = "Я изменю тебя";

  document.body.append(clonedBtn);
});

// здесь можете создать EventListener для второй кнопки

clonedBtn.addEventListener("click", () => {
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
})
