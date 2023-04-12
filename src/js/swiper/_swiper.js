import Swiper from 'swiper/swiper-bundle';

if (window.innerWidth < 768) {
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    spaceBetween: 16,
    loop: true,
    slidesPerView: 1.25,
    speed: 1000,    
  });
};