const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.profile__edit-button');
const closePopupBtn = document.querySelector('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');
const profileFormName = document.querySelector('.popup__input_text_name');
const profileFormAboutMe = document.querySelector('.popup__input_text_about-me');
const formContact = document.querySelector('.popup__inputs');

function openPopup() {
  profileFormName.value = profileName.textContent;
  profileFormAboutMe.value = profileAboutMe.textContent;

  popup.classList.add('popup_open');
}
// Вызов фукнции
openPopupBtn.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_open');
}
// Вызов функции
closePopupBtn.addEventListener('click', closePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileFormName.value;
  profileAboutMe.textContent = profileFormAboutMe.value;
  closePopup();
}
// Вызов функции
formContact.addEventListener('submit', handleFormSubmit);
