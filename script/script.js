let popup = document.querySelector(".popup");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-button");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");
let inputName = document.querySelector(".popup__field_name");
let inputProfession = document.querySelector(".popup__field_profession");
let saveButton = document.querySelector(".popup__save-button");

function togglePopup() {
  popup.classList.toggle("popup_opened");
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function handleFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  popup.classList.toggle("popup_opened");
}

editButton.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);
saveButton.addEventListener("click", handleFormSubmit);
