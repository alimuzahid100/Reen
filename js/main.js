// owl-carousel plug in code start
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeOut:1000,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// owl-carousel plug in code end

// stickup.min.js plugin code start

jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      $('.navbar-wrapper').stickUp();
    });
  });
  
 // stickup.min.js plugin code end

// typed.js plug in code start

var typed3 = new Typed('.type', {
    strings: [' Clean. Responsive.'],
    typeSpeed: 60,
    backSpeed: 60,
    smartBackspace: true, // this is a default
    loop: true
  });

  var typed3 = new Typed('.check', {
    strings: ['our latest works'],
    typeSpeed: 60,
    backSpeed: 60,
    smartBackspace: true, // this is a default
    loop: true
  });

  var typed3 = new Typed('.want', {
    strings: ['work with us?'],
    typeSpeed: 60,
    backSpeed: 60,
    smartBackspace: true, // this is a default
    loop: true
  });
// typed.js plug in code end

// justflip.js plugin code start

    $('.img-flip').justFlipIt({
    });

// justflip.js plugin code end

// wow.js plug in code start
    new WOW().init();
// wow.js plug in code end

// magnifik.min.js plugin code start

  $('.example').magnifik({
    ratio: 0.5
  });


// magnifik.min.js plugin code end