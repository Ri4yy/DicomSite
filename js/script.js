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

    $('.btn--project, .modal__close').click((e) => {
        $('#modal-form').toggleClass('modal--open');

        $(document).keydown(function(e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('#modal-form').removeClass('modal--open');
                $('html').removeClass('no-scroll');
            }
        });

        $('html').toggleClass('no-scroll');
    })

    $(".btn").mouseover(function(e){
        var pos = $(this).offset();
        var elem_left = pos.left;
        var elem_top = pos.top;
        var Xinner = e.pageX - elem_left;
        var Yinner = e.pageY - elem_top;
            $(this).find(".btn__hover").css({
                "left":Xinner,
                "top":Yinner
            })
    });

    $('.b-service__top').click((e) => {
        $(e.target).closest('.b-service__item').toggleClass('b-service__item--active')
        // $(e.target).closest('.b-service__item').find('.b-service__wrapper').toggleClass('open')
    })

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