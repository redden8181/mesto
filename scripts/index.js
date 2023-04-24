// popups
const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
const popupCardAdd = document.querySelector('.popup_type_card-add');

// popups close buttons
const popupProfileClose = popupProfileEdit.querySelector('.popup__close-btn');
const popupCardClose = popupCardAdd.querySelector('.popup__close-btn');

// popups open buttons
const popupProfileOpen = document.querySelector('.profile__edit-button');
const popupCardOpen = document.querySelector('.profile__add-button');

// profile edit, submit
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');
const profileFormName = popupProfileEdit.querySelector('.popup__profile-edit__input_text_name');
const profileFormAboutMe = popupProfileEdit.querySelector('.popup__profile-edit__input_text_about-me');
const formContact = popupProfileEdit.querySelector('.popup__form');
// console.log({profileName, profileAboutMe, profileFormName, profileFormAboutMe, formContact});

// Popup profile edit open, close
const togglePopup = function(popup) {
  popup.classList.toggle('popup_opened');
}

popupProfileOpen.addEventListener('click', function () {
  profileFormName.value = profileName.textContent;
  profileFormAboutMe.value = profileAboutMe.textContent;

  togglePopup(popupProfileEdit);
});

popupProfileClose.addEventListener('click', () => {
  togglePopup(popupProfileEdit);
});

// popup profile save
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileFormName.value;
  profileAboutMe.textContent = profileFormAboutMe.value;
  togglePopup(popupProfileEdit); //закрыть попап после сохранения
}

formContact.addEventListener('submit', handleFormSubmit);

// Popup card open-close 22-24
// function togglePopup(popup) {
//   popup.classList.toggle('popup_opened');
// } 

popupCardOpen.addEventListener('click', function() {
  togglePopup(popupCardAdd);
});
popupCardClose.addEventListener('click', () => {
  togglePopup(popupCardAdd);
});



const initialCards = [
  {
    name: 'Мой первый кожанный',
    link: 'https://sun9-29.userapi.com/impg/SDlaBZe6uSH_oKlPdAWCyUGOvAOHxUcezQaApw/j6EIjOlRxpM.jpg?size=1620x2160&quality=95&sign=fb23d8fbb7dcb0fe994eb59d7c442f6f&type=album'
  },
  {
    name: 'Сплю в обед',
    link: 'https://sun9-72.userapi.com/impg/29qN-0KX9pre-sRSKBhGmxWne4irFondqwvK7A/6WnhmDuz-HQ.jpg?size=1620x2160&quality=95&sign=139591ac4bc003557bc2a2735f48e83e&type=album'
  },
  {
    name: 'На чилле',
    link: 'https://sun9-65.userapi.com/impg/0ILHnalUh4Sfg618tsse3eCuP4bJp1ASrpERRQ/h_xuL__B-7g.jpg?size=1620x2160&quality=95&sign=8e3d72907819f6ee7c8f0a136e1880cf&type=album'
  },
  {
    name: 'Загораю',
    link: 'https://sun9-51.userapi.com/impg/zu-tTGf8aPilfLDZtf9EJge_XZCgEOZgB3khdg/OAIKbDRO-SA.jpg?size=1620x2160&quality=95&sign=de8a923c38744a69c0fcbb4bd9363c91&type=album'
  },
  {
    name: 'Я - Археолог',
    link: 'https://sun9-78.userapi.com/impg/_HvVUuX5FBx3jIswa3ABo9m-9XtTSeQAkpjwaw/utl5GNq_rf4.jpg?size=1125x1633&quality=95&sign=971abcc53c3f187103e5adb3bc34921f&type=album'
  },
  {
    name: 'Перекус',
    link: 'https://sun9-49.userapi.com/impg/YWl8_dZJxQ6V5qpOVMjpEnY46DHgMkHvZ42GBw/JcQ_N3gLHpU.jpg?size=1620x2160&quality=95&sign=5df484834b6b13e708a85027bb125c9f&type=album'
  }
];

const cardTemplate = document.getElementById('card-template');
const cardsContainer = document.querySelector('.cards');
const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);


const cardTitle = cardElement.querySelector('.card__title');
const cardImage = cardElement.querySelector('.card__image');
const cardDeleteBtn = cardElement.querySelector('.card__delete');
const cardLikeBtn = cardElement.querySelector('.card__like');

initialCards.forEach((card) => {

  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);


  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.name;
  cardElement.querySelector('.card__delete');
  cardElement.querySelector('.card__like');

  cardTemplate.cloneNode(true); 
  cardsContainer.append(cardElement);

  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
});
});
