const form = document.getElementById("personal-data-form");
const heightInput = form.elements["height"];
const genderInput = form.elements["gender"];
const errorMessageElement = document.getElementById("error-message");
const resultCard = document.getElementById("result-card");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  // console.log(heightInput.value, genderInput.value);
  if (validate()) {
    const idealWeight = getIdealWeightByHeightForGender(
      heightInput.value,
      genderInput.value
    );
    resultCard.innerText = "Ваш идеальный вес " + idealWeight;
  }
}

function getIdealWeightByHeightForGender(height, gender) {
  if (gender === "male") {
    return height - 100;
  }
  return height - 110;
}

function validate() {
  let errorMessage = "";
  let result = true;
  if (!Number(heightInput.value)) {
    errorMessage += "Invalid weight, please use numbers. ";
    result = false;
  }
  if (parseInt(heightInput.value) > 210) {
    errorMessage += "Sorry? but our program doesn`t work with height > 210 cm";
    result = false;
  }
  errorMessageElement.innerText = errorMessage;
  return result;
}
