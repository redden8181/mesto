const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.profile__edit-button_open_popup');
const closePopupBtn = document.querySelector('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');
const profileFormName = document.querySelector('.form__contact_name');
const profileFormAboutMe = document.querySelector('.form__contact_about-me');
const formContact = document.querySelector('.form__contact');

function openPopup() {
  profileFormName.value = profileName.textContent;
  profileFormAboutMe.value = profileAboutMe.textContent;

  popup.classList.add('popup_open');
}
// Вызов фукнции
openPopupBtn.addEventListener('click', openPopup);

function closePopup(evt) {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseBtn = evt.target.classList.contains('popup__close-btn')
  if (isOverlay || isCloseBtn) {
    popup.classList.remove('popup_open');
  }
}
// Вызов функции
popup.addEventListener('click', closePopup)

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileFormName.value;
  profileAboutMe.textContent = profileFormAboutMe.value;
  closePopup();
}
// Вызов функции
formContact.addEventListener('submit', handleFormSubmit);
