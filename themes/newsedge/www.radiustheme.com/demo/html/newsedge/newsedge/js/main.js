(function ($) {
    "use strict";
    if($("#current_date").length) {
        document.getElementById("current_date").innerHTML = formatAMPM();
    }
    function formatAMPM() {
    var d = new Date(),
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[d.getDay()]+' , '+months[d.getMonth()]+' '+d.getDate()+' , '+d.getFullYear();
    }
    
    /*-------------------------------------
    IE Fixing
    -------------------------------------*/
    function isIE() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1 || myNav.indexOf('trident') != -1) ? true : false;
    }

    if (isIE()) {
        $('body').addClass('ie');
    }

    /*-------------------------------------
    Popup
    -------------------------------------*/
    var yPopup = $(".popup-youtube");
    if (yPopup.length) {
        yPopup.magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
    if ($('.zoom-gallery').length) {
        $('.zoom-gallery').each(function () { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a.ne-zoom', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    }

    /*-------------------------------------
     Jquery Serch Box
     -------------------------------------*/
    $(document).on('click', '#top-search-form .search-button', function (e) {
        e.preventDefault();
        var targrt = $(this).prev('input.search-input');
        targrt.animate({
            width: ["toggle", "swing"],
            height: ["toggle", "swing"],
            opacity: "toggle"
        }, 500, "linear");
        return false;
    });

    /*-------------------------------------
    On click loadmore functionality 
    -------------------------------------*/
    $('.loadmore').on('click', 'a', function (e) {
        e.preventDefault();
        var _this = $(this),
            _parent = _this.parents('.menu-list-wrapper'),
            _target = _parent.find('.menu-list'),
            _set = _target.find('.menu-item.hidden').slice(0, 3);
        if (_set.length) {
            _set.animate({
                opacity: 0
            });
            _set.promise().done(function () {
                _set.removeClass('hidden');
                _set.show().animate({
                    opacity: 1
                }, 1000);
            });
        } else {
            _this.text('No more item to display');
        }
        return false;
    });

    /*-------------------------------------
     jQuery MeanMenu activation code
     --------------------------------------*/
    $('nav#dropdown').meanmenu({
        siteLogo: "<div class='mobile-menu-nav-back'><a href='index.html' class='logo-mobile'><img src='img/logo.png'/></a></div>"
    });

    /*-------------------------------------
     Wow js Active
    -------------------------------------*/
    new WOW().init();

    /*-------------------------------------
     Jquery Scollup
     -------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*-------------------------------------
    Offcanvas Menu activation code
    -------------------------------------*/
    $('#wrapper').on('click', '#side-menu-trigger a.menu-bar', function (e) {
        e.preventDefault();
        var $this = $(this),
            wrapper = $(this).parents('body').find('>#wrapper'),
            wrapMask = $('<div />').addClass('offcanvas-mask');
        wrapper.addClass('open').append(wrapMask);
        $this.addClass('open');
        $this.next('.menu-times').removeClass('close');
        document.getElementById('offcanvas-body-wrapper').style.right = '0';
        return false;
    });
    $('#wrapper').on('click', '#side-menu-trigger a.menu-times', function (e) {
        e.preventDefault();
        var $this = $(this);
        $("#offcanvas-body-wrapper").attr('style', '');
        $this.prev('.menu-bar').removeClass('open');
        $this.addClass('close');
        closeSideMenu();
        return false;
    });
    $('#wrapper').on('click', '#offcanvas-nav-close a', function (e) {
        closeSideMenu();
        return false;
    });
    $(document).on('click', '#wrapper.open .offcanvas-mask', function () {
        closeSideMenu();
    });
    $(document).on('keyup', function (event) {
        if (event.which === 27) {
            event.preventDefault();
            closeSideMenu();
        }
    });

    function closeSideMenu() {
        var wrapper = $('body').find('>#wrapper'),
            $this = $('#side-menu-trigger a.menu-times');
        wrapper.removeClass('open').find('.offcanvas-mask').remove();
        $("#offcanvas-body-wrapper").attr('style', '');
        $this.prev('.menu-bar').removeClass('open');
        $this.addClass('close');
    }

    /*-------------------------------------
    Select2 activation code
    -------------------------------------*/
    if ($('#archive-search select.select2').length) {
        $('#archive-search select.select2').select2({
            theme: 'classic',
            dropdownAutoWidth: true,
            width: '100%'
        });
    }

    /*-------------------------------------
     Window load function
     -------------------------------------*/
    $(window).on('load', function () {

        /*-------------------------------------
        Page Preloader
        -------------------------------------*/
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });

        /*-------------------------------------
         jQuery for Isotope initialization
         -------------------------------------*/
        var iso_container = $('.ne-isotope');
        if (iso_container.length > 0) {

            iso_container.each(function () {
                var $container = $(this),
                    selector = $container.find('.isotope-classes-tab a.current').attr('data-filter');
                // Isotope initialization
                var $isotope = $container.find('.featuredContainer').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });

                // Isotope filter
                $container.find('.isotope-classes-tab').on('click', 'a', function () {

                    var $this = $(this);
                    $this.parent('.isotope-classes-tab').find('a').removeClass('current');
                    $this.addClass('current');
                    var selector = $this.attr('data-filter');
                    $isotope.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    return false;

                });

            });
        }

        /*-------------------------------------
         jQuery for Isotope initialization
         -------------------------------------*/
        var $container = $('.ne-isotope-all');
        if ($container.length > 0) {

            var selector = $container.find('.isotope-classes-tab a.current').attr('data-filter');
            console.log(selector);
            // Isotope initialization
            var $isotope = $container.find('.featuredContainer').isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            // Isotope filter
            $container.find('.isotope-classes-tab').on('click', 'a', function () {

                var $this = $(this);
                $this.parent('.isotope-classes-tab').find('a').removeClass('current');
                $this.addClass('current');
                var selector = $this.attr('data-filter');
                $isotope.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;

            });
        }
    });

    /*-------------------------------------
     Accordion
     -------------------------------------*/
    var accordion = $('#accordion');
    accordion.children('.panel').children('.panel-collapse').each(function () {
        if ($(this).hasClass('in')) {
            $(this).parent('.panel').children('.panel-heading').addClass('active');
        }
    });
    accordion.on('show.bs.collapse', function (e) {
        $(e.target).prev('.panel-heading').addClass('active');
    }).on('hide.bs.collapse', function (e) {
        $(e.target).prev('.panel-heading').removeClass('active');
    });

    /*-------------------------------------
     Contact Form initiating
     -------------------------------------*/
    var contactForm = $('#contact-form');
    if (contactForm.length) {
        contactForm.validator().on('submit', function (e) {
            var $this = $(this),
                $target = contactForm.find('.form-response');
            if (e.isDefaultPrevented()) {
                $target.html("<div class='alert alert-success'><p>Please select all required field.</p></div>");
            } else {
                $.ajax({
                    url: "vendor/php/contact-form-process.php",
                    type: "POST",
                    data: contactForm.serialize(),
                    beforeSend: function () {
                        $target.html("<div class='alert alert-info'><p>Loading ...</p></div>");
                    },
                    success: function (text) {
                        if (text === "success") {
                            $this[0].reset();
                            $target.html("<div class='alert alert-success'><p>Message has been sent successfully.</p></div>");
                        } else {
                            $target.html("<div class='alert alert-success'><p>" + text + "</p></div>");
                        }
                    }
                });
                return false;
            }
        });
    }

    /*-------------------------------------
    Login pop up form
    -------------------------------------*/
    $('#login-button').on('click', function (e) {
        e.preventDefault();
        var self = $(this),
            target = self.next('#login-form');
        if (self.hasClass('open')) {
            target.slideUp('slow');
            self.removeClass('open');
        } else {
            target.slideDown('slow');
            self.addClass('open');
        }
    });
    $('#login-form').on('click', '.form-cancel', function (e) {
        e.preventDefault();
        var self = $(this),
            parent = self.parents('#login-form'),
            loginButton = parent.prev('#login-button');
        parent.slideUp('slow');
        loginButton.removeClass('open');
    });

    /*-------------------------------------
    Google Map
    -------------------------------------*/
    if ($("#googleMap").length) {
        window.onload = function () {
            var styles = [{
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#b7d0ea'
                }]
            }, {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#c2c2aa'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#b6d1b0'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
                }]
            }];
            var options = {
                mapTypeControlOptions: {
                    mapTypeIds: ['Styled']
                },
                center: new google.maps.LatLng(-37.81618, 144.95692),
                zoom: 11,
                disableDefaultUI: true,
                mapTypeId: 'Styled'
            };
            var div = document.getElementById('googleMap');
            var map = new google.maps.Map(div, options);
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                icon: 'img/map-marker.png',
                map: map
            });
            var styledMapType = new google.maps.StyledMapType(styles, {
                name: 'Styled'
            });

            map.mapTypes.set('Styled', styledMapType);
        };
    }

    /*-------------------------------------
     Carousel slider initiation
     -------------------------------------*/
    $('.ne-carousel').each(function () {
        var carousel = $(this),
            loop = carousel.data('loop'),
            items = carousel.data('items'),
            margin = carousel.data('margin'),
            stagePadding = carousel.data('stage-padding'),
            autoplay = carousel.data('autoplay'),
            autoplayTimeout = carousel.data('autoplay-timeout'),
            smartSpeed = carousel.data('smart-speed'),
            dots = carousel.data('dots'),
            nav = carousel.data('nav'),
            navSpeed = carousel.data('nav-speed'),
            rXsmall = carousel.data('r-x-small'),
            rXsmallNav = carousel.data('r-x-small-nav'),
            rXsmallDots = carousel.data('r-x-small-dots'),
            rXmedium = carousel.data('r-x-medium'),
            rXmediumNav = carousel.data('r-x-medium-nav'),
            rXmediumDots = carousel.data('r-x-medium-dots'),
            rSmall = carousel.data('r-small'),
            rSmallNav = carousel.data('r-small-nav'),
            rSmallDots = carousel.data('r-small-dots'),
            rMedium = carousel.data('r-medium'),
            rMediumNav = carousel.data('r-medium-nav'),
            rMediumDots = carousel.data('r-medium-dots'),
            rLarge = carousel.data('r-Large'),
            rLargeNav = carousel.data('r-Large-nav'),
            rLargeDots = carousel.data('r-Large-dots'),
            center = carousel.data('center');
        carousel.owlCarousel({
            loop: (loop ? true : false),
            items: (items ? items : 4),
            lazyLoad: true,
            margin: (margin ? margin : 0),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            dots: (dots ? true : false),
            nav: (nav ? true : false),
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            navSpeed: (navSpeed ? true : false),
            center: (center ? true : false),
            responsiveClass: true,
            responsive: {
                0: {
                    items: (rXsmall ? rXsmall : 1),
                    nav: (rXsmallNav ? true : false),
                    dots: (rXsmallDots ? true : false)
                },
                480: {
                    items: (rXmedium ? rXmedium : 2),
                    nav: (rXmediumNav ? true : false),
                    dots: (rXmediumDots ? true : false)
                },
                768: {
                    items: (rSmall ? rSmall : 3),
                    nav: (rSmallNav ? true : false),
                    dots: (rSmallDots ? true : false)
                },
                992: {
                    items: (rMedium ? rMedium : 4),
                    nav: (rMediumNav ? true : false),
                    dots: (rMediumDots ? true : false)
                },
                1200: {
                    items: (rLarge ? rLarge : 5),
                    nav: (rLargeNav ? true : false),
                    dots: (rLargeDots ? true : false)
                }
            }
        });
    });

    /*-------------------------------------
     Window onLoad and onResize event trigger
     -------------------------------------*/
    $(window).on('load resize', function () {
        var wHeight = $(window).height(),
            mLogoH = $('a.logo-mobile').outerHeight();
        wHeight = wHeight - 50;
        $('.mean-nav > ul').css('height', wHeight + 'px');

        /* add top margin */
        var target = $(".add-top-margin"),
            mHeight = $(".header-menu-fixed").outerHeight();
        target.css({
            "margin-top": mHeight + 'px'
        });
        var windowWidth = $(window).width();
        if (windowWidth < 991) {
            $('body.mean-container').css('margin-top', 0);
        }

    });

    /*-------------------------------------
     Jquery Stiky Menu at window Load
     -------------------------------------*/
    $(window).on('scroll', function () {
        var s = $('#sticker'),
            sH = s.outerHeight(),
            windowpos = $(window).scrollTop(),
            windowWidth = $(window).width(),
            h1 = $('#header-layout1'),
            h2 = $('#header-layout2');
        if (windowWidth > 991) {
            var topBarH = 1,
                mBottom = 0;

            if (h2.length) {
                topBarH = h2.find('.header-top-bar').outerHeight();
            }

            if (windowpos >= topBarH) {
                if (h1.length) {
                    s.addClass('stick');
                }
                if (h2.length) {
                    s.addClass('stick');
                    $('.main-menu-area').addClass('header-menu-fixed');
                    $('body').css({
                        'margin-top': sH + 'px'
                    });
                }

            } else {
                s.removeClass('stick');
                if (h2.length) {
                    s.removeClass('stick');
                    $('.main-menu-area').removeClass('header-menu-fixed');
                    $('body').css({
                        'margin-top': 0
                    });
                }
            }
        }
    });

    /*-------------------------------------
     Masonry
     -------------------------------------*/
    $('.masonry-items').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.masonry-item',
        // use element for option
        columnWidth: '.masonry-item',
        // percentPosition: true
    });

})(jQuery);