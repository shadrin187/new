let callBg = document.querySelector('.call')
let call = document.querySelector('.call__container')
let openCalls = document.querySelectorAll('.call_open')
let closeCall = document.querySelector('.call__burger')
let focusableElements = callBg.querySelectorAll('button,input')
let focusEl = document.querySelector('.call__name')
let firstFocusEl = focusableElements[0]
let lastFocusEl = focusableElements[focusableElements.length - 1]
let body = document.querySelector('body')
let widthScroll
let sidebarBg = document.querySelector('.sidebar')


for (let openCall of openCalls) {
  openCall.addEventListener('click', () => {
    if (sidebarBg.classList.contains('active')) {
      callBg.classList.add('call_active')
    } else {
      callBg.classList.add('call_active')
      widthScroll = window.innerWidth - callBg.offsetWidth + 'px'
      body.style.overflow = 'hidden'
      body.style.paddingRight = widthScroll
    }
  })
}

closeCall.addEventListener('click', () => {
  if (sidebarBg.classList.contains('active')) {
    callBg.classList.remove('call_active')
  } else {
    callBg.classList.remove('call_active')

    setTimeout(() => {
      body.style.overflow = 'visible'
      body.style.paddingRight = '0px'
    }, 500)
  }
})

document.addEventListener('click', (e) => {
  if (e.target === callBg) {
    if (sidebarBg.classList.contains('active')) {
      callBg.classList.remove('call_active')
    } else {
      callBg.classList.remove('call_active')
  
      setTimeout(() => {
        body.style.overflow = 'visible'
        body.style.paddingRight = '0px'
      }, 500)
    }
  }
})

let KEYCODE_TAB = 9

callBg.addEventListener('keydown', function (e) {
  if (e.key === 'Tab' || e.keyCode === KEYCODE_TAB) {
    if (e.shiftKey) {
      if (document.activeElement === firstFocusEl) {
        lastFocusEl.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastFocusEl) {
        firstFocusEl.focus()
        e.preventDefault()
      }
    }
  }
})
