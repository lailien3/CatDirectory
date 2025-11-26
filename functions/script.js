function ShowDate() {
  document.getElementById("dateButton").innerHTML = Date();
}

const revealSpecies = document.querySelector("#reveal-species");

revealSpecies.addEventListener("click", function () {
  revealSpecies.textContent = "British Shorthair!";
});

const revealBirthday = document.querySelector("#reveal-birthday");
const revealBirthdayText = revealBirthday.querySelector(".birthdayText");
const revealAgeButton = revealBirthday.querySelector(".ageButton");

revealAgeButton.hidden = true;

revealBirthday.addEventListener("click", function () {
  revealBirthdayText.textContent = "27th July 2021!";
  revealAgeButton.hidden = false;
});

revealAgeButton.addEventListener("click", function () {
  const todaysDate = new Date();
  const birthDate = new Date(2021, 6, 27);

  let age = todaysDate.getFullYear() - birthDate.getFullYear();

  revealAgeButton.textContent = age;
});

const revealFur = document.querySelector("#reveal-fur");

revealFur.addEventListener("click", function () {
  revealFur.textContent = "Lilac!";
});

const revealWhisker = document.querySelector("#reveal-whisker");

revealWhisker.addEventListener("click", function () {
  revealWhisker.textContent = "Grey!";
});

const revealEye = document.querySelector("#reveal-eye");

revealEye.addEventListener("click", function () {
  revealEye.textContent = "Amber!";
});

const revealFurLength = document.querySelector("#reveal-fur-length");

revealFurLength.addEventListener("click", function () {
  revealFurLength.textContent = "Shorthair!";
});
