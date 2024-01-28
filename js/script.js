// header & fixed button
const header = document.getElementById("header");
const headerFix = document.getElementById("header-fix");
const headerSimpleFix = document.getElementById("header-simple-fix");
const fullscreen = document.querySelector('.fullscreen');
const callbackButton = document.getElementById('callback-button');

if (!!headerSimpleFix) {
  const headerSimpleFixHeight = headerSimpleFix.offsetHeight;
  window.addEventListener('scroll', function () {
    let scrollDistance = window.scrollY;
    if (scrollDistance >= headerSimpleFixHeight) {
      headerSimpleFix.classList.add('sticky');

    } else {
      headerSimpleFix.classList.remove('sticky');

    }
  })
}

if (!!fullscreen) {
  const fullscreenHeight = fullscreen.offsetHeight;
  window.addEventListener('scroll', function () {
    let scrollDistance = window.scrollY;
    if (scrollDistance >= fullscreenHeight) {
      header.classList.add('sticky');
      headerFix.classList.add('sticky')
      callbackButton.classList.add('sticky')
    } else {
      header.classList.remove('sticky');
      headerFix.classList.remove('sticky')
      callbackButton.classList.remove('sticky')
    }
  })
}




// burger
let burgers = document.querySelectorAll(".burger");
burgers.forEach(function (burger) {
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
  });
})


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
  item.classList.remove("none");
});

if (!!btnShowCards) {
  btnShowCards.addEventListener("click", sliceArrayCards);
}


function sliceArrayCards() {
  if (shownCards >= cardsArray.length) return;

  countClickBtnShowCards++;

  const countShowCards = COUNT_SHOW_CARDS_CLICK * countClickBtnShowCards;
  const cardsArrayVisible = cardsArray.slice(shownCards, countShowCards);

  cardsArrayVisible.forEach(function (item) {
    item.classList.add("visible");
    item.classList.remove("none");
  });

  const visibleCards = cards.querySelectorAll(".visible");

  if (visibleCards.length == cardsArray.length) {
    btnShowCards.classList.add("none");
  }
}

//gallery
let gallery = document.querySelector('.about-project-gallery');
if (!!gallery) {
  baguetteBox.run(".about-project-gallery");
}


// calculator - page info
let infoButtons = document.querySelectorAll('.calculator-info-btn');
infoButtons.forEach(function (item) {

  item.addEventListener('click', function () {
    if (item.classList.contains("open")) {
      item.classList.remove("open");
      item.innerText = 'Развернуть';
      item.closest('.calculator-info').querySelector('.calculator-info-block').classList.remove("open");
    } else {
      item.classList.add("open");
      item.innerText = 'Свернуть';
      item.closest('.calculator-info').querySelector('.calculator-info-block').classList.add("open");
    }
  })
})

// calculator

// let checkboxes = document.querySelectorAll('.calculator-input');
// checkboxes.forEach(function (item) {
//   let checkedPrice;
//   let finishPrice = 0;
//   item.addEventListener('input', function () {
//     let checked = document.querySelectorAll('.calculator-input:checked');
//     // console.log(checked);
//     for (let i = 0; i < checked.length; i++) {
//       checkedPrice = Number(checked[i].closest('.calculator-block').querySelector('.calculator-cost span').innerText);
//       finishPrice += checkedPrice;
//       document.querySelector('.calculator-finish-price').innerText = finishPrice;
//       console.log(finishPrice);
//     }
//   })
// })

// let checkboxes = document.querySelectorAll('.calculator-input');
// checkboxes.forEach(function (item) {
//   let checkedPrice = Number(item.closest('.calculator-block').querySelector('.calculator-cost span').innerText);
//   let finishPrice = 0;
//   item.addEventListener('input', function () {
//     for (let i = 0; i < checkboxes.length; i++) {
//       if (checkboxes[i].checked) {
//         finishPrice += Number(checkboxes[i].closest('.calculator-block').querySelector('.calculator-cost span').innerText);
//       } else {
//         finishPrice = finishPrice - Number(checkboxes[i].closest('.calculator-block').querySelector('.calculator-cost span').innerText);
//       }
//       console.log(finishPrice);
//     }

//   })

// })

// to top button
// const goTopBtn = document.querySelector(".go-top");
// window.addEventListener("scroll", trackScroll);
// goTopBtn.addEventListener("click", goTop);
// function trackScroll() {
//   const scrolled = window.scrollY;
//   const coords = document.documentElement.clientHeight;
//   if (scrolled > coords) {
//     goTopBtn.classList.add("show");
//   } else {
//     goTopBtn.classList.remove("show");
//   }
// }

// function goTop() {
//   if (window.scrollY > 0) {
//     window.scrollBy(0, -30); // второй аргумент - скорость
//     setTimeout(goTop, 0); // входим в рекурсию
//   }
// }

