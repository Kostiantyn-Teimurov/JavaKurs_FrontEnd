const newElement = document.createElement("p");
newElement.textContent = "Я был создан при помощи js";
newElement.style.border = "2px solid red";
document.body.append(newElement);



const targetElement = document.getElementById("target-element");
const newBtn = document.createElement("button");
newBtn.type = "button";
newBtn.textContent = "Click on me";
targetElement.append(newBtn);
