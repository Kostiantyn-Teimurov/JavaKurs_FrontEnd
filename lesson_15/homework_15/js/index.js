const form = document.getElementById("animals-form");
const nameInput = form.elements["name"];
const ageInput = form.elements["age"];
const breedInput = form.elements["breed"];
const error = document.getElementById("errors");
const animalsContainer = document.getElementById("animals-container");


form.addEventListener("submit", addAnimal);

let animals = [
    {name: "Cat1", age: 3, breed: "Siam"},
    {name: "Dog1", age: 5, breed: "Husky"},
    {name: "Dog2", age: 7, breed: "Terrier"},
];

renderAnimals(animals);


function addAnimal(event) {
    event.preventDefault();
    console.log(nameInput.value);
    if (checkName() && checkAge() && checkBreed()) {
        animals.push({name: nameInput.value, age: ageInput.value, breed: breedInput.value});
        nameInput.value = "";
        ageInput.value = "";
        breedInput.value = "";
        error.innerText = "";
    } else {
        error.innerText = "Проверьте данные!"
    }
    renderAnimals(animals);
}



function renderAnimals (animals) {
    while(animalsContainer.firstChild) {
        animalsContainer.removeChild(animalsContainer.firstChild);
    }
    animals.forEach(animal => {
        const animalCard = document.createElement("div");
        animalCard.innerHTML = `<span>${animal.name}</span>, <span>${animal.age}</span>, <span>${animal.breed}</span>`;
        animalsContainer.appendChild(animalCard);
    });
}


function checkName () {
    return nameInput.value.length > 1;
}

function checkAge () {
    return ageInput.value > 0;
}

function checkBreed () {
    return breedInput.value.length > 1;
}