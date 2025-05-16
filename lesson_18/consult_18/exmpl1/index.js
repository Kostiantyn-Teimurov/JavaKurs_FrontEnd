const catFactsElement = document.getElementById("cat-facts");
fetch("https://catfact.ninja/fact")
  .then((response) => response.json()) // тут с джсона в объект
  .then((obj) => {
    const { fact, length } = obj;
    catFactsElement.textContent = `${fact} ${length}`;
  });
