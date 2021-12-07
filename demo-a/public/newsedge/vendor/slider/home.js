(function($) {
    
        "use strict";
    
    
    
        //---------------------------------------------
    
        //Nivo slider
    
        //---------------------------------------------
    
    
    
        $('#ensign-nivoslider-3').nivoSlider({
    
            effect: 'boxRainReverse', // Specify sets like: 'sliceDownLeft sliceUp sliceUpLeft sliceUpDown sliceUpDownLeft fold fade random slideInRight slideInLeft boxRandom boxRain boxRainReverse boxRainGrow boxRainGrowReverse'
            slices: 15, // For slice animations
            boxCols: 8, // For box animations
            boxRows: 4, // For box animations
            animSpeed: 100, // Slide transition speed
            pauseTime: 7000, // How long each slide will show
            startSlide: 0, // Set starting Slide (0 index)
            directionNav: true, // Next & Prev navigation
            controlNav: true, // 1,2,3... navigation
            controlNavThumbs: false, // Use thumbnails for Control Nav
            pauseOnHover: false, // Stop animation while hovering
            manualAdvance: false, // Force manual transitions
            prevText: 'Prev', // Prev directionNav text
            nextText: 'Next', // Next directionNav text
            randomStart: false, // Start on a random slide
            beforeChange: function() {}, // Triggers before a slide transition
            afterChange: function() {}, // Triggers after a slide transition
            slideshowEnd: function() {}, // Triggers after all slides have been shown
            lastSlide: function() {}, // Triggers when last slide is shown
            afterLoad: function() {} // Triggers when slider has loaded
    
            /*effect: 'fade',
    
            slices: 15,
    
            boxCols: 8,
    
            boxRows: 4,
    
            animSpeed: 500,
    
            pauseTime: 5000,
    
            startSlide: 0,
    
            directionNav: true,
    
            controlNavThumbs: true,
    
            pauseOnHover: true,
    
            manualAdvance: false*/
    
        });
    
    })(jQuery);
    