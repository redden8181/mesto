const popupOpenBtn = document.querySelector('.profile__edit-button_popup-open');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-btn')

function openPopup() {
  popup.classList.add('popup_open')
}
function closePopup(evt) {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseBtn = evt.target.classList.contains('popup__close-btn');
  
  if (isOverlay || isCloseBtn) {
    popup.classList.remove('popup_open')
  }
}

popupOpenBtn.addEventListener('click', openPopup);
popup.addEventListener('click', closePopup);