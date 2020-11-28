'use strict';

let modal = document.querySelector('.modal');

let content = document.querySelector('.modal-close');

let btn = document.querySelector('.Modal-openBtn');

let redBtn = document.querySelector('.button__red');

(function popUpModalWindow() {
  btn.addEventListener('click', () => {
    modal.classList.remove('disappearance');
    modal.classList.add('popUp');
  })
})();

function closeX() {
  content.addEventListener('click', () => {
    modal.classList.remove('popUp');
    modal.classList.add('disappearance');
  });
}

function closeCancelButton() {
  redBtn.addEventListener('click', () => {
    modal.classList.add('disappearance');
    modal.classList.remove('popUp');
  });
}

function closeOutside() {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('disappearance');
      modal.classList.remove('popUp');
    }
  })
}


(function modalClose() {
  closeX();
  closeCancelButton();
  closeOutside();
}
)();

  


