let button = document.querySelector('.technics__button');
let technics = document.querySelectorAll('.technics__slide_hidden');
let buttonImage = document.querySelector('.technics__button_image');

if (window.innerWidth >= 768 && window.innerWidth < 1366) {
  button.addEventListener('click', function () {
    for (let technic of technics) {
      if (technic.classList.contains('technics__slide_hidden')) {
        technic.classList.remove('technics__slide_hidden');
        button.textContent = 'Скрыть';
        buttonImage.classList.add('technics__button_image_rotate');
      } else {
        technic.classList.add('technics__slide_hidden');
        buttonImage.classList.remove('technics__button_image_rotate');
        button.textContent = 'Показать все';
      }
    }
  })
}

let technicsDesktop = document.querySelectorAll('.technics__slide_hidden_desktop');

if (window.innerWidth >= 1366) {
  button.addEventListener('click', function () {
    for (let technicDesktop of technicsDesktop) {
      if (technicDesktop.classList.contains('technics__slide_hidden_desktop')) {
        technicDesktop.classList.remove('technics__slide_hidden_desktop');
        button.textContent = 'Скрыть';
        buttonImage.classList.add('technics__button_image_rotate')
      } else {
        technicDesktop.classList.add('technics__slide_hidden_desktop');
        button.textContent = 'Показать все';
        buttonImage.classList.remove('technics__button_image_rotate')
      }
    }
  })
}