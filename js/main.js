$(function () {

  let header__top = $("#header__top");
  let header__content = $("#header__content");
  let header__contentH = header__content.innerHeight();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    let header__contentH = header__content.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > 100) {
      header__top.addClass("fixed");
    } else {
      header__top.removeClass("fixed");
    }

    console.log(scrollPos);

  });

  $(".menu a, .header__link, .logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.reviews__slider').slick({
    dots: true,
    arrows: false,
  });

  $('.menu__btn, .menu__link').on('click', function () {
    $('.menu').toggleClass('menu--active')
    $('body').toggleClass('lock')
  });

});


var mixer = mixitup('.portfolio__content');