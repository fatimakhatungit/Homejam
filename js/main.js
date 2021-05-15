(function ($) {
"use strict";


// meanmenu
$('#mobile-menu').meanmenu({

	meanMenuContainer: '.mobile-menu',

	meanScreenWidth: "991",

	onePage: true

});

// Stikey Js  
(function () {
    var nav = $('.menu-nav-sec');
    var scrolled = false;
    $(window).on('scroll', function () {
      if (120 < $(window).scrollTop() && !scrolled) {
        nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
        scrolled = true;
      }
      if (90 > $(window).scrollTop() && scrolled) {
        nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
        scrolled = false
      }
    });
  }());

  // Menu Nav

  
// owlCarousel
$('.testimonial-active').owlCarousel({
    loop:true,
    margin:30,
	items:1,
	autoplay: true,
	navText: [ '<span class="fas fa-arrow-left">', '<span class="fas fa-arrow-right">' ],
    nav:true,    
	dots:false,
    responsive:{
        0:{
			items:1,
			nav: false,
        },
        767:{
            items:2
        },
        992:{
            items:3
        }

    }
});

// counterUp
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

})(jQuery);	