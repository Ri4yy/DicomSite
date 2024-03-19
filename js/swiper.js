const swiperPartners = new Swiper('.swiper-partners', {
    spaceBetween: 60,
    enabled: true,

    breakpoints: {
      320: {
        allowTouchMove: true,
        spaceBetween: 20,
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      480: {
        allowTouchMove: true,
        spaceBetween: 20,
        slidesPerView: 3,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      768: {
        allowTouchMove: true,
        spaceBetween: 40,
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      1024: {
        allowTouchMove: true,
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row",
        }
      },
      1280: {
        allowTouchMove: true,
        slidesPerView: 5,
        grid: {
          rows: 2,
          fill: "row",
        }
      },
      1921: {
        allowTouchMove: true,
        slidesPerView: 6,
        grid: {
          rows: 2,
          fill: "row",
        }
      },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination-partners',
    },
});

const swiperTicker = new Swiper(".swiper-ticker", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  speed: 5000,
  autoplay: {
    delay: 0.01,
  },
  loop: true,
  slidesPerView:'auto',
  disableOnInteraction: true,
  allowTouchMove:false,

  breakpoints: {
    320: {
      slidesPerView: 0.5,
    },
    480: {
      slidesPerView: 0.7,
    },
    1280: {
      slidesPerView: 1,
    },
    },
});