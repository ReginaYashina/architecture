// burger
let burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  burger.classList.toggle("is-active");
});

// swiper
new Swiper(".fullscreen-slider", {
  navigation: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  simulateTouch: false,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  speed: 3000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
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
        tabs_item.classList.remove("_active");
        tabs_blocks[index].classList.remove("_active");
      }
      tabs_item.classList.add("_active");
      tabs_blocks[index].classList.add("_active");
      e.preventDefault();
    });
  }
}

// load more
const COUNT_SHOW_CARDS_CLICK = 6;
const cards = document.querySelector(".cards");
const btnShowCards = document.querySelector(".show-cards");
let shownCards = COUNT_SHOW_CARDS_CLICK;
let countClickBtnShowCards = 1;
const cardsArray = Array.from(document.querySelectorAll(".card"));
const cardsArrayVisible = cardsArray.slice(0, COUNT_SHOW_CARDS_CLICK);

if (
  cardsArray.length >= shownCards &&
  btnShowCards.classList.contains("none")
) {
  btnShowCards.classList.remove("none");
}

cardsArrayVisible.forEach(function (item) {
  item.classList.add("visible");
});

btnShowCards.addEventListener("click", sliceArrayCards);

function sliceArrayCards() {
  if (shownCards >= cardsArray.length) return;

  countClickBtnShowCards++;

  const countShowCards = COUNT_SHOW_CARDS_CLICK * countClickBtnShowCards;
  const cardsArrayVisible = cardsArray.slice(shownCards, countShowCards);

  cardsArrayVisible.forEach(function (item) {
    item.classList.add("visible");
  });

  const visibleCards = cards.querySelectorAll(".visible");

  if (visibleCards.length == cardsArray.length) {
    btnShowCards.classList.add("none");
  }
}

// =========================================================================
// стили у картинок поправить,
// так  как при нечетном количестве последнюю растягивает на весь экран.
// =========================================================================
