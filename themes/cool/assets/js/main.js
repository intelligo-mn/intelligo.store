(function($) {
    'use strict';
    jQuery(document).on("ready", function() {
        jQuery(window).load(function() {
            jQuery(".template-preloader-rapper").fadeOut(500);
        });
		
    });
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 5000, function() {
                window.location.hash = hash;
            });
        }
    });
		jQuery('.max-list').mixItUp({  
		  selectors: {
			target: '.contacts',
			filter: '.control',
			//sort: '.sort-btn'
		  },
			animation:{
			animateResizeContainer: false,
			effects: 'fade scale'
		  }

		});
	
	
})(jQuery);

 