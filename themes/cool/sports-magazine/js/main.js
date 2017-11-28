(function($) {
    "use strict";

    /*-------------------------------------
     jQuery Main Menu activation code
     --------------------------------------*/
    jQuery('nav#dropdown').meanmenu();

    /*----------------------------
    wow js active
    ------------------------------ */
    new WOW().init();

    /*-------------------------------------
       Author Slider jQuery activation code
       -------------------------------------*/
    $("#author-slider-section").owlCarousel({
        // Most important owl features
        items : 3,     
        // Navigation 
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        responsive:{
            0:{
              items:1 // In this configuration 1 is enabled from 0px up to 479px screen size 
            },

            480:{

              items:2, // from 480 to 677 
              nav:false // from 480 to max 

            },

            678:{

              items:2, // from this breakpoint 678 to 959
              center:false // only within 678 and next - 959
            },

            768:{

              items:3, // from this breakpoint 960 to 1199
              margin:20, // and so on...
              center:false 

            },

            1200:{

              items:3,
              loop:false,
              margin: 0

            }
        } 
    });

    /*-------------------------------------
       Slick Slider jQuery activation code
       -------------------------------------*/

    $('.full-slider').slick({
      centerMode: true,
      centerPadding: '460px',
      slidesToShow: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1680,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '300px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1440,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '280px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1199,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });


    /*-------------------------------------
       Tab Slider jQuery activation code
       -------------------------------------*/

    $("#tab-slider, #tab-slider1").owlCarousel({
        // Most important owl features
        items : 1,     
        // Navigation 
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        responsive:{
            0:{
              items:1 // In this configuration 1 is enabled from 0px up to 479px screen size 
            },

            480:{

              items:1, // from 480 to 677 
              nav:false // from 480 to max 

            },

            678:{

              items:1, // from this breakpoint 678 to 959
              center:false // only within 678 and next - 959
            },

            960:{

              items:1, // from this breakpoint 960 to 1199
              margin:20, // and so on...
              center:false 

            },

            1200:{

              items:1,
              loop:false,
              margin: 0

            }
        } 
    });


    /*-------------------------------------
       Tab Slider jQuery activation code
       -------------------------------------*/

    $('.tab-slider').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });


    /*-------------------------------------
       Fetuered Videos popup jQuery activation code
       -------------------------------------*/

    $('.popup-videos').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    }); 
   

      /*-------------------------------------
       Abput jQuery activation code
       -------------------------------------*/

    $("#total-team").owlCarousel({
        // Most important owl features
        items : 3,     
        // Navigation 
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        responsive:{
            0:{
              items:1 // In this configuration 1 is enabled from 0px up to 479px screen size 
            },

            480:{

              items:1, // from 480 to 677 
              nav:false // from 480 to max 

            },
            767:{

              items:3, // from this breakpoint 960 to 1199
              margin:20, // and so on...
              center:false 

            },

            1200:{

              items:3,
              loop:false,
              margin: 0

            }
        }

    });
	
	/*-------------------------------------
	Preloder Js here
	---------------------------------------*/
	//preloader
	$(window).load(function() {
		$(".preloader").delay(2000).fadeOut(500);
		$(".sk-cube-grid").click(function() {
		$(".preloader").fadeOut(500);
		})
	})

    /*-------------------------------------
    Main Menu jQuery activation code
    -------------------------------------*/
   $(".main-menu ul a").on('click', function(e) {
            var link = $(this);

            var item = link.parent("li");
            
            if (item.hasClass("active")) {
                item.removeClass("active").children("a").removeClass("active");
            } else {
                item.addClass("active").children("a").addClass("active");
            }

            if (item.children("ul").length > 0) {
                var href = link.attr("href");
                link.attr("href", "#");
                setTimeout(function () { 
                    link.attr("href", href);
                }, 300);
                e.preventDefault();
            }
        })
        .each(function() {
            var link = $(this);
            if (link.get(0).href === location.href) {
                link.addClass("active").parents("li").addClass("active");
                return false;
            }
    });


    /*------------------------------------
    SideSlide menu Activation
    -------------------------------------*/
    $('li#slideBotton > a > i').on('click', function() {
        $('#sideSlide').addClass("highlight");
    });
    $('.close').on('click', function() {
        $('#sideSlide').removeClass("highlight");
    });

    /*-------------------------------
      Counter Up Js
    ---------------------------------*/
    $('.about-counter').counterUp({
        delay: 50,
        time: 3000
    });


    /*-------------------------------------
       Search jQuery activation code
       -------------------------------------*/
    $(".search-btn").on('click', function() {

    //$(".search-input-elm").toggle();
    $(".search-input-elm").animate({
      width: 'toggle',
      display:'block'
    });
  });

 /*-------------------------------
    Main menu sticky
    ---------------------------------*/   

    var num = $('.header-top-area').innerHeight();
    var menu_height = $('.header-bottom-area').innerHeight();
    $(window).bind('scroll', function () {    
     if ($(window).scrollTop() >= num+menu_height) {
            $('.header-bottom-area').addClass('sticky-header');
      $('body').css({'padding-top':menu_height});
        } else {
            $('.header-bottom-area').removeClass('sticky-header');
      $('body').css({'padding-top':0});
        }        
    });
    
    
    /*--------------------------
     ScrollTop init Activation Code
    ---------------------------- */
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').on('click', function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


})(jQuery);