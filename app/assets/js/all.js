$(document).ready(function () {
  const swiperBanner = new Swiper('#c-banner .c-banner__swiper-container', {
    slidersPerView: 1,
    loop: true,
    navigation: {
      prevEl: '#c-banner .js-swiperButtonPrev',
      nextEl: '#c-banner .js-swiperButtonNext',
    },
    autoplay: {
      delay: 3000,
    },
  });

  const swiper_Choices = new Swiper('.js-topChoices .swiper-container', {
    // slidesPerView: 'auto',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true, // @@todo
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // 767: {
      // 768: {
      500: {
        slidesPerView: 2,
      },
      // 1199: {
      //     slidesPerView: 3,
      // },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  const swiper__inspiration = new Swiper('.js-inspiration .swiper-container', {
    // slidesPerView: 1,
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    // loopFillGroupWithBlank: true,
    // @@slidesPerGroup
  });
  // var swiper__detailBanner = new Swiper('.section__detailBanner .swiper-container', {
  //     slidesPerView: 1,
  //     slidesPerGroup: 1,
  //     spaceBetween: 0,
  //     loop: false,
  //     loopFillGroupWithBlank: true,
  //     pagination: {
  //         el: '.swiper-pagination',
  //         clickable: true,
  //     },
  //     navigation: {
  //         nextEl: '.swiper-button-next',
  //         prevEl: '.swiper-button-prev',
  //     },
  // });
  const swiper__detailBanner = new Swiper('#js-detail__swiper', {
    // slidesPerView: 'auto',
    slidesPerView: 1,
    loop: true,
    loopFillGroupWithBlank: true, // @@todo
    navigation: {
      prevEl: '#js-detail__swiper .c-swiper__navButtonPrev',
      nextEl: '#js-detail__swiper .c-swiper__navButtonNext',
    },
  });

  $('.js-btn').click(function () {
    $(this).find('.js-btn__info').toggleClass('invisible');
    if ($(this).find('.js-btn__more').text() != 'expand_less') {
      $(this).find('.js-btn__more').text('expand_less');
    } else {
      $(this).find('.js-btn__more').text('expand_more');
    }
  });

  // $(window).resize(function () {
  //     if ($(window).width() < 576) {
  //         $('.js-myBooking__item').addClass(' bg-secondary rounded--deepen');
  //     } else {
  //         $('.js-myBooking__item').removeClass('bg-secondary rounded--deepen');
  //     }

  //     if ($(window).width() < 992) {
  //         $('.js-calendar__mobileDropdown').addClass('w-100');
  //         $('.js-calendar__mobileTable').addClass('table-sm');
  //     } else {
  //         $('.js-calendar__mobileDropdown').removeClass('w-100');
  //         $('.js-calendar__mobileTable').removeClass('table-sm');
  //     }
  // });

  switch ($('title').text()) {
    case 'Index':
      $('.js-nav').addClass('fixed-top');
      break;
    case 'Result':
      $('.js-nav').addClass('fixed-top');
      break;
    case 'Result - Detail':
      $('.js-nav').addClass('fixed-top');
      break;
    case 'Login':
      $('.js-nav').hide();
      $('.js-footer__nav').hide();
      break;
    case 'My Booking':
      $('.js-nav__signUp').hide();
      $('.js-nav__login').hide();
      $('.js-nav__hasLogin').addClass('d-block');
      $('.js-nav__hasLogin__userName').text('David Lin');
      break;
  }

  // AOS.init({
  //     useClassNames: true,
  //     initClassName: false,
  //     animatedClassName: 'animate__animated'
  // });

  $('#js-collapseToggle__reserveInfo__btn').on('click', function () {
    $('#js-collapse__reserveInfo__body').collapse('toggle');
    $('#js-reserveInfo__total--fadeToggle').fadeToggle(100);
  });

  !(function (doc, win) {
    const docEle = doc.documentElement; // 获取html元素
    const event =
      'onorientationchange' in window ? 'orientationchange' : 'resize'; // 判断是屏幕旋转还是resize;
    const fn = function () {
      const width = docEle.clientWidth;
      const filterModal = $('#js-filterModal');
      const filterContainer = filterModal.find('.c-filterContainer');
      const filterContainerList = filterModal.find('.c-filterContainer__list');
      if (width < 767) {
        filterModal.addClass('modal fade');
        filterContainer.addClass('modal-dialog');
        filterContainerList.addClass('modal-content');
      } else {
        filterModal.removeClass('modal fade');
        filterContainer.removeClass('modal-dialog');
        filterContainerList.removeClass('modal-content');
        filterModal.show();
      }
    };
    fn();
    win.addEventListener(event, fn, false);
    doc.addEventListener('DOMContentLoaded', fn, false);
  })(document, window);
});
