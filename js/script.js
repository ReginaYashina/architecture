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

//tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
  let tab = tabs[index];
  let tabs_items = tab.querySelectorAll("._tabs-item");
  let tabs_blocks = tab.querySelectorAll("._tabs-block");
  for (let index = 0; index < tabs_items.length; index++) {
    let tabs_item = tabs_items[index];
    tabs_item.addEventListener("click", function (e) {
      for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.classList.remove('_active');
        tabs_blocks[index].classList.remove('_active');
      }
      tabs_item.classList.add('_active');
      tabs_blocks[index].classList.add('_active');
      e.preventDefault();
    });
  }
}