// Переменная блока попап
const popup = document.querySelector('.popup');

// Переменная кнопки открытия блока
// Функция добавление нового класса (Открытие блока попап)
// Вызов функции открытия блока попап
const openPopupBtn = document.querySelector('.profile__edit-button_open_popup');

function openPopup() {
  popup.classList.add('popup_open');
}

openPopupBtn.addEventListener('click', openPopup);


// Переменная
// Функция закрытия попапа
const closePopupBtn = document.querySelector('.popup__close-btn');

function closePopup(evt) {
  // Переменная = evt(event) - событие
  //              target - там где произошло событие
  //              classList.contains - метод проверяющий содержит ли элемент класс ('popup')
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseBtn = evt.target.classList.contains('popup__close-btn')
  // Проверка нажатий на оверлей
  //                  на кнопку
  //      console.log(isOverlay);
  //      console.log(isCloseBtn);
  // Если нажатие будет на кнопку или оверлей то функция удалит класс popup_open.
  if (isOverlay || isCloseBtn) {
    popup.classList.remove('popup_open');
  }
}
// Вызов функции закрытия попап
popup.addEventListener('click', closePopup)



/* 
const popupOpenBtn = document.querySelector('.profile__edit-button_popup-open');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-btn');

// Открытие попапа

function openPopup() {
  popup.classList.add('popup_open');
}

popupOpenBtn.addEventListener('click', openPopup);

//Закрытие попапа

function closePopup(evt) {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseBtn = evt.target.classList.contains('popup__close-btn');
  
  if (isOverlay || isCloseBtn) {
    popup.classList.remove('popup_open');
  }
}

popupCloseBtn.addEventListener('click', closePopup)

popupCloseBtn.addEventListener('click', closePopup);
*/
/* 
let cardBtn = document.querySelectorAll('.card__button');
function cardBtnClick() {
    cardBtn.classList.remove('card__button_disabled');
    cardBtn.classList.add('card__button_active');
  };
cardBtn.addEventListener('click', cardBtnClick);
console.log(cardBtnClick);
 */
/* 
function edit() {
  const editName = document.querySelector('.profile__name');
  const editAbout = document.querySelector('.profile__about-me');

  editName.innerHTML += <h1 class="profile__name">${editName.value}</h1>
  editAbout.innerHTML += <p class="profile__about-me">${editAbout.value}</p>

  editName.value = '';
  editAbout.value = '';
}; */
 
