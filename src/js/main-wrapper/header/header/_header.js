let sidebarBg = document.querySelector('.sidebar');
let sidebar = document.querySelector('.sidebar__container');
let openBurgerButtons = document.querySelector('.header__burger');
let closeBurgerButton = document.querySelector('.aside-header__burger');
let body = document.querySelector('body');
let widthScroll;


openBurgerButtons.addEventListener('click', () => {
  sidebarBg.classList.add('active');
  widthScroll = window.innerWidth - sidebarBg.offsetWidth + 'px';
  body.style.overflow = 'hidden';
  body.style.paddingRight = widthScroll;
});

closeBurgerButton.addEventListener('click',() => {
  sidebarBg.classList.remove('active');

  setTimeout(() => {
    body.style.overflow = 'visible';
    body.style.paddingRight = '0px';
}, 500);
});

document.addEventListener('click', (e) => {
  if(e.target === sidebarBg) {
    sidebarBg.classList.remove('active'); 

    setTimeout(() => {
      body.style.overflow = 'visible';
      body.style.paddingRight = '0px';
  }, 500);
  }
});

sidebarBg.addEventListener('keydown', function(e) {
  let focusableElements = sidebarBg.querySelectorAll('button,a,label')
  let firstFocusEl = focusableElements[0];
  let lastFocusEl = focusableElements[focusableElements.length - 1];
  let KEYCODE_TAB = 9;

  if (e.key === 'Tab' || e.keyCode === KEYCODE_TAB) {
    if ( e.shiftKey ) {
      if (document.activeElement === firstFocusEl) {
        lastFocusEl.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusEl) {
        firstFocusEl.focus();
        e.preventDefault();
      }
    }
  }
});