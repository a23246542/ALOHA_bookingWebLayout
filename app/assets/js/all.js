$(document).ready(function () {
  const searchBarCheckIn = $('#js-searchBarCheckIn');
  searchBarCheckIn.daterangepicker();
  searchBarCheckIn.click(() => {
    if (!searchBarCheckIn.hasClass('active')) {
      searchBarCheckIn.addClass('active');
    } else {
      searchBarCheckIn.removeClass('active');
      searchBarCheckIn.data('daterangepicker').hide();
    }
  });

  const pageTitle = $('title').text();
  const footerEl = $('#js-footer');
  switch (pageTitle) {
    case 'ALOHA':
      // $('.js-nav').addClass('fixed-top');
      break;
    case 'Search Result':
      // $('.js-nav').addClass('fixed-top');
      break;
    case 'Detail':
      // $('.js-nav').addClass('fixed-top');
      break;
    case 'Reserve':
      footerEl
        .find('.c-footer__language,.c-footer__currency')
        .removeClass('d-lg-block');
      footerEl.addClass('c-footer--simple');
      break;
    case 'Reserve Success':
      footerEl
        .find('.c-footer__language,.c-footer__currency')
        .removeClass('d-lg-block');
      footerEl.addClass('c-footer--simple');
      break;
    case 'Login':
      // $('.js-nav').hide();
      // $('.js-footer__nav').hide();
      break;
    case 'My Booking':
      // $('.js-nav__signUp').hide();
      // $('.js-nav__login').hide();
      // $('.js-nav__hasLogin').addClass('d-block');
      // $('.js-nav__hasLogin__userName').text('David Lin');
      $('#js-footer').addClass('c-footer--simple');
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

  const searchResultList = document.querySelectorAll(
    '.c-searchResult__item .js-roomCardTitle'
  );
  searchResultList.forEach((item) => {
    item.addEventListener('click', () => {
      location.href = 'detail.html';
    });
  });

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

  const swiper_Choices = new Swiper('#js-topChoices .swiper-container', {
    slidesPerView: 'auto',
    // slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // loopFillGroupWithBlank: true, // @@todo
    navigation: {
      nextEl: '#js-topChoices .swiper-button-next',
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
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
    spaceBetween: 32,
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
});
