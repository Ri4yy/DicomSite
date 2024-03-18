document.addEventListener("DOMContentLoaded", () => {
    // Открытие мобильного меню
    let toggle = false;
    $('#openMenu').click((e) => {
            $('#openMenu').toggleClass('btn-menu--open')
            $('.menu').toggleClass('menu--open')
            if(toggle) {
                $('.header').css('background', 'transparent');
                toggle = false;
            } else {
                $('.header').css('background', 'white');
                toggle = true;
            }
            $('html').toggleClass('no-scroll');
    }); 


  // Фиксированная шапка при скролле
  // $(window).on('load resize', () => {
  //     let windows = $(window);
  //     let nav = $('.header-container');
  //     if($(window).width() < 1481) {
  //         let headerHeight = $('.header-container').height()
  //         headerHeight += 40;
  //         let h = nav.offset().top;
  //         windows.scroll(function(){
  //             if (windows.scrollTop() > headerHeight){
  //                 nav.addClass('header-fixed');
  //                 $('main').css('margin-top', headerHeight + 'px');
  //             } else {
  //                 nav.removeClass('header-fixed');
  //                 $('main').css('margin-top', '0');
  //             }
  //         });
  //     } else {
  //         windows.scroll(function(){
  //             if (windows.scrollTop() > 140){
  //                 nav.addClass('header-fixed');
  //                 $('main').css('margin-top', '140px');
  //             } else {
  //                 nav.removeClass('header-fixed');
  //                 $('main').css('margin-top', '0');
  //             }
  //         });
  //         return 
  //     }
  // })

  // function tabs(wrapperMain, wrapperTab, wrapperContent, activeTab, activeContent) {
  //     $(wrapperTab).on('click', 'li:not('+activeTab+')', function () {
  //         $(this)
  //             .addClass(activeTab).siblings().removeClass(activeTab)
  //             .closest(wrapperMain).find(wrapperContent).removeClass(activeContent).eq($(this).index()).addClass(activeContent);
  //     });
  // }
  // tabs('.tabs', '.tabs__list', '.tabs__content', 'active-tab', 'active');

  // Модальное окно
  // function showModal(btnOpen, modalBody) {
  //     btnOpen.click(function() {
  //         modalBody.show( );
  //         $('html').addClass('no-scroll');
  //         return false;
  //     });		
   
  //     $(document).keydown(function(e) {
  //         if (e.keyCode === 27) {
  //             e.stopPropagation();
  //             modalBody.hide();
  //             $('html').removeClass('no-scroll');
  //         }
  //     });
      
  //     modalBody.click(function(e) {
  //         if ($(e.target).closest('.modal__wrapper').length == 0) {
  //             $(this).hide();					
  //             $('html').removeClass('no-scroll');
  //         }
  //     });
  // }
  // showModal($('.open-modal--consult'), $('.modal-consult'));
})
// let wrapper = document.querySelector('.ticker'),
//     marquee = document.querySelector('.ticker__text'),   
//     wrapperWidth = wrapper.offsetWidth,
//     marqueeWidth = marquee.scrollWidth;
    
// document.querySelector('button').onclick = function() {
//   clearInterval(interval)
// }
    
// function move() {
//   let currentTX = getComputedStyle(marquee).transform.split(',');
//   if( currentTX[4] === undefined ) {
//     currentTX = -1;
//   } else {
//     currentTX = parseFloat(currentTX[4]) - 1;
//   }
  
//   if(-currentTX >= marqueeWidth) {
//     marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
  
//   } else {
//     marquee.style.transform = 'translateX(' + currentTX + 'px)';
//   }
// }

// let interval = setInterval(move, 1);