!function(e){"use strict";e("nav#dropdown").meanmenu({siteLogo:"<a href='index.html' class='logo-mobile-menu'><img src='img/mobile-logo.png' /></a>"}),(new WOW).init(),e.scrollUp({scrollText:'<i class="fa fa-arrow-up"></i>',easingType:"linear",scrollSpeed:900,animation:"fade"}),e(window).on("load",function(){e("#preloader").fadeOut("slow",function(){e(this).remove()});var a=e("#inner-isotope");if(a.length>0){var t=a.find(".featuredContainer").isotope({filter:"*",animationOptions:{duration:750,easing:"linear",queue:!1}});a.find(".isotop-classes-tab").on("click","a",function(){var a=e(this);a.parent(".isotop-classes-tab").find("a").removeClass("current"),a.addClass("current");var i=a.attr("data-filter");return t.isotope({filter:i,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1})}}),e(window).on("load resize",function(){var a=e(window).height();e("a.logo-mobile-menu").outerHeight();a-=50,e(".mean-nav > ul").css("height",a+"px")}),e(window).on("scroll",function(){var a=e("#sticker"),t=e(".wrapper"),i=a.outerHeight(),o=e(window).scrollTop(),n=e(window).width(),r=a.parent(".header1-area"),s=a.parent(".header2-area"),l=a.parent(".header3-area"),d=(l.find(".header-top-area").outerHeight(),a.prev(".header-top-area"));if(n>767){t.css("padding-top","");var u,c=0;r.length?(u=i=1,c=0):s.length?(c=s.find(".header-bottom-area").outerHeight(),u=d.outerHeight()):l.length&&(u=d.outerHeight()),o>=u?(a.addClass("stick"),s.length&&d.css("margin-bottom",c+"px")):(a.removeClass("stick"),s.length&&d.css("margin-bottom",0))}})}(jQuery);