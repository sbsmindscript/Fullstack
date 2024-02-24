
!(function($) {
  // Activate smooth scroll on page load with hash links in the url
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-xl-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  /* var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });
 */
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

    // Testimonials carousel (uses the Owl Carousel library)
  $("#partners").owlCarousel({
    autoplay: true,
    dots: true,
	nav:false,
    loop: true,  
	margin:15,
	responsive : {
		// breakpoint from 0 up
		0 : {
			items: 1,
		},
		// breakpoint from 480 up
		480 : {
			items: 2,
		},
		// breakpoint from 768 up
		768 : {
			items: 3,
		},
		// breakpoint from 768 up
		1024 : {
			items: 5,
		}
	}
  });
  $(".client-carousel").owlCarousel({
    autoplay: true, 
    dots: true,
	  nav:true,
    loop: false,  
	  margin:15,
	  responsive : {
		// breakpoint from 0 up
		0 : {
			items: 1,
		},
		// breakpoint from 480 up
		480 : {
			items: 2,
		},
		// breakpoint from 768 up
		768 : {
			items: 3,
		},
		// breakpoint from 768 up
		1024 : {
			items: 4,
		}
	}
  });
    // Services carousel (uses the Owl Carousel library)
  $(".services-carousel-1").owlCarousel({
    autoplay: true,
    dots: true,
	nav:false,
    loop: true,
	items: 4,	 
    margin:20, 
	responsive : {
		// breakpoint from 0 up
		0 : {
			items: 1,
		},
		// breakpoint from 480 up
		480 : {
			items: 1,
		},
		// breakpoint from 768 up
		768 : {
			items: 1,
		},
		// breakpoint from 768 up
		1200 : {
			items: 3,
		}
		
		
	}
  });
   $(".services-carousel-2").owlCarousel({
    autoplay: true,
    dots: true,
	nav:false,
    loop: true,
	items: 4,	 
    margin:20,
	rtl:false,	
	responsive : {
		// breakpoint from 0 up
		0 : {
			items: 1,
		},
		// breakpoint from 480 up
		480 : {
			items: 1,
		},
		// breakpoint from 768 up
		768 : {
			items: 1,
		},
		// breakpoint from 768 up
		1200 : {
			items: 3,
		}
		
		
	}
  });
  
$('#header-slider').owlCarousel({
	autoplay: true,
    loop:true, 
    dots:false,
    nav:true,
    mouseDrag:true,
    animateIn: 'fadeIn',
	animateOut: 'fadeOut',
	autoplayTimeout:9000,
	lazyLoad: false,  
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.mobile-nav li').not('.drop-down').on( "click", function(e) {   
 // e.preventDefault();
  $( ".mobile-nav-toggle" ).trigger( "click" );
});
 

})(jQuery);