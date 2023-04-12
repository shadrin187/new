let feedbackBg = document.querySelector('.feedback')
let feedback = document.querySelector('.feedback__container')
let openFeedbacks = document.querySelectorAll('.feedback_open')
let closeFeedback = document.querySelector('.feedback__burger')
let focusableEls = feedbackBg.querySelectorAll('button,input,textarea')
let activeInput = document.querySelector('.feedback__name')
let firstFocusableEl = focusableEls[0]
let lastFocusableEl = focusableEls[focusableEls.length - 1]
let body = document.querySelector('body')
let widthScroll
let sidebarBg = document.querySelector('.sidebar')

for (let openFeedback of openFeedbacks) {
  openFeedback.addEventListener('click', () => {
    if (sidebarBg.classList.contains('active')) {
      feedbackBg.classList.add('feedback_active')
    } else {
      feedbackBg.classList.add('feedback_active')
      widthScroll = window.innerWidth - feedbackBg.offsetWidth + 'px'
      body.style.overflow = 'hidden'
      body.style.paddingRight = widthScroll
    }
  })
}

closeFeedback.addEventListener('click', () => {
  if (sidebarBg.classList.contains('active')) {
    feedbackBg.classList.remove('feedback_active')
  } else {
    feedbackBg.classList.remove('feedback_active')

    setTimeout(() => {
      body.style.overflow = 'visible'
      body.style.paddingRight = '0px'
    }, 500)
  }
})

document.addEventListener('click', (e) => {
  if (e.target === feedbackBg) {
    if (sidebarBg.classList.contains('active')) {
      feedbackBg.classList.remove('feedback_active')
    } else {
      feedbackBg.classList.remove('feedback_active')

      setTimeout(() => {
        body.style.overflow = 'visible'
        body.style.paddingRight = '0px'
      }, 500)
    }
  }
})

var KEYCODE_TAB = 9

feedbackBg.addEventListener('keydown', function (e) {
  if (e.key === 'Tab' || e.keyCode === KEYCODE_TAB) {
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus()
        e.preventDefault()
      }
    }
  }
})
