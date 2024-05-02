let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click',function(){
  mobileNav.classList.add('open')
})

times.addEventListener('click',function(){
  mobileNav.classList.remove('open')
})

$(document).on('ready', function() {
  $(".lazy").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      appendDots: '.slider-dots',
      dotsClass: 'dots'
    });
});

// $('.autoplay').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });