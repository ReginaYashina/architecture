// burger
let burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
  burger.classList.toggle('is-active');
})

// swiper
new Swiper('.fullscreen-slider', {
  navigation: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  simulateTouch: false,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false
  },
  speed: 3000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});