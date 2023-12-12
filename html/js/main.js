$(document).ready(function () {
  $('.center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed : 2500, 
    variableWidth: true,
    speed: 300,
      breakpoint: {
        1254: {
          arrows: true,
          variableWidth: false,
          centerMode: false,
          slidesToShow: 2
        },
        600: {
          arrows: true,
          variableWidth: false,
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '0px',
        }
      },
  });
});