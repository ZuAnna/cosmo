// let elem = document.querySelector('.header__sales');
// elem.addEventListener('mouseover', ()=>{
//    document.querySelector('.percent').style.color = '#fff'
// } )

// slider one
$(document).ready(function () {
  $(".main-slider").slick({
    adaptiveHeight: true,
    speed: 700,
    easing: "linear",
    infinite: false,
  });
  // let arrow = document.querySelectorAll('.slick-arrow');
  // arrow.addEventListener('mouseover', () =>{
  //   arrow.style.fill =
  // })

  // $('.categories-slider-items').slick({
  //    adaptiveHeight:true,
  //    speed: 700,
  //    easing: 'linear',
  //    infinite:true,
  //    arrows: false,
  //    slideToShow: 4,
  //    slideToScroll: 1

  // });
  $(".categories-slider-items").owlCarousel({
    items: 4,
    dots: false,
    nav: false,
    margin: 30,
    loop: true,
    responsive: {
      1775: {
        margin: 25,
      },
      1280: {
        items: 3,
      },
      900: {
        items: 2,
      },
    },
  });

  $(".trendings__products-in").owlCarousel({
    items: 5,
    dots: true,
    nav: true,
    loop: false,
    margin: 25,
  });
  $(".circle-outer").owlCarousel({
    items: 5,
    nav: true,
    loop: false,
    margin: 65,
  });

  $(".news__slider").owlCarousel({
    items: 3,
    nav: true,
    dots: true,
    loop: false,
    navSpeed: 600,
    margin: 30
  });

  $(".lightbox__container").owlCarousel({
    items: 1,
    mouseDrag: false,
    dots:false,
    nav: true,
    center: true,
    slideSpeed : 500
  });
  $(".insta-slider").owlCarousel({
    items: 5,
    dots:false,
    nav: true,
    center: true,
    margin: 10,
    slideSpeed : 500
  });
});
