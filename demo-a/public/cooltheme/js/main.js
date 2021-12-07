(function($) {
    "use strict";

    /*-------------------------------------
     jQuery Main Menu activation code
     --------------------------------------*/
    jQuery('nav#dropdown').meanmenu();

    $('.dropdown-toggle').on('click', function() {
        var location = $(this).attr('href');
        window.location.href = location;
        return false;
    });


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

            991:{

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
       Header News Slider jQuery activation code
       -------------------------------------*/
    $("#top-news-slider").owlCarousel({
        // Most important owl features
        items : 3,  
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],  
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 100,
        autoplayHoverPause: true,
        // Responsive options
        responsive: true,
        responsive:{
		    0:{
		      items:1 // In this configuration 1 is enabled from 0px up to 479px screen size 
		    },

		    480:{

		      items:1, // from 480 to 677 
		      nav:true // from 480 to max 

		    },

		    678:{

		      items:1, // from this breakpoint 678 to 959
		      center:false // only within 678 and next - 959
		    },

		    960:{

		      items:2, // from this breakpoint 960 to 1199
		      margin:20, // and so on...
		      center:false 

		    },

		    1200:{

		      items:3,
		      margin: 0

		    }
	    } 
    })

    
    /*-------------------------------------
       Fetuered Videos jQuery activation code
       -------------------------------------*/
    $("#featured-videos-section").owlCarousel({
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

		      items:1, // from 480 to 677 
		      nav:false // from 480 to max 

		    },

		    678:{

		      items:2, // from this breakpoint 678 to 959
		      center:false // only within 678 and next - 959
		    },

		    768:{

		      items:2, // from this breakpoint 960 to 1199
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
       Fetuered Videos popup jQuery activation code
       -------------------------------------*/

    $('.popup-videos').magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    }); 
   

    /*About Team Jquery*/

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

              items:2, // from 480 to 677 
              nav:false // from 480 to max 

            },

            767:{

              items:2, // from this breakpoint 678 to 959
              center:false // only within 678 and next - 959
            },

            991:{

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
    Counter Up
    ---------------------------------*/
    $('.about-counter').counterUp({
        delay: 50,
        time: 3000
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