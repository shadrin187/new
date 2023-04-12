let btn = document.querySelector('.brands__button');
let brands = document.querySelectorAll('.brands__slide_hidden');
let btnImage = document.querySelector('.brands__button_image');

if (window.innerWidth >= 768 && window.innerWidth < 1366) {
  btn.addEventListener('click', function () {
    for (let brand of brands) {
      if (brand.classList.contains('brands__slide_hidden')) {
        brand.classList.remove('brands__slide_hidden');
        btn.textContent = 'Скрыть';
        btnImage.classList.add('brands__button_image_rotate');
      } else {
        brand.classList.add('brands__slide_hidden');
        btnImage.classList.remove('brands__button_image_rotate');
        btn.textContent = 'Показать все';
      }
    }
  })
}
let brandsDesktop = document.querySelectorAll('.brands__slide_hidden_desktop');
let image = document.querySelector('.brands__button_image');

if (window.innerWidth >= 1366) {
  btn.addEventListener('click', function () {
    for (let brandDesktop of brandsDesktop) {
      if (brandDesktop.classList.contains('brands__slide_hidden_desktop')) {
        brandDesktop.classList.remove('brands__slide_hidden_desktop');
        btn.textContent = 'Скрыть';
        btnImage.classList.add('brands__button_image_rotate')
      } else {
        brandDesktop.classList.add('brands__slide_hidden_desktop');
        btn.textContent = 'Показать все';
        btnImage.classList.remove('brands__button_image_rotate')
      }
    }
  })
}
