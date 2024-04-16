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
  speed: 8000,
  autoplay: {
    delay: 2,
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
    1921: {
      slidesPerView: 2,
    },
    },
});

document.addEventListener('DOMContentLoaded', function () {

  const swiperLicense = new Swiper('.swiper-license', {
  
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 24,
    // cssMode: true,
    navigation: {
        enabled: false,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      navigation: {
          enabled: true
      }
    },
    550: {
      slidesPerView: 1.3,
      slidesPerGroup: 1,
      spaceBetween: 20,
      navigation: {
          enabled: true
      }
    },
    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
      navigation: {
          enabled: true
      }
    },
    1080: {
        slidesPerView: 2.5,
        slidesPerGroup: 3,
        spaceBetween: 20,
        navigation: {
            enabled: true
        }
    },
    1240: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 24,
        navigation: {
            enabled: true
        }
    }
    },
    on: {
      slideChange: function () {
        const activeIndex = this.activeIndex;
        const slides = this.slides;

        // Добавляем задержку перед изменением opacity
        setTimeout(() => {
          slides.forEach((slide, index) => {
            if (index >= activeIndex && index < activeIndex + 3) {
              slide.style.opacity = 1;
            } else {
              slide.style.opacity = 0;
            }
          });
        }, 50); // Используем 50 мс задержку, но можно изменить значение по вашему усмотрению
      }
    }
  });

  const slides = swiperLicense.slides;
  for (let i = 0; i < 3; i++) {
    slides[i].style.opacity = 1;
  }
})