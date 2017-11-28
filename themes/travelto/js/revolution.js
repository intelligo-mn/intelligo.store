// script for revolution plugin
(function($) {
  'use strict';
  var tpj = $;
  var revapi46;
    if (tpj(".rev_slider").revolution == undefined) {
      revslider_showDoubleJqueryError(".rev_slider");
    } else {
      revapi46 = tpj(".rev_slider").show().revolution({
        sliderType: "standard",
        jsFileLocation: "../vendors/revolution/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          onHoverStop: "off",
          touch: {
            touchenabled: "off",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          },
          arrows: {
            style: "",
            enable: true,
            hide_onmobile: true,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            tmp: '',
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 20,
              v_offset: 0,
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 20,
              v_offset: 0
            }
          }
        },
        responsiveLevels: [1170, 1024, 778, 480],
        gridwidth: [1170, 1024, 778, 480],
        gridheight: [658, 676, 960, 720],
        lazyType: "none",
        parallax: {
          origo: "slidercenter",
          speed: 1000,
          levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "scroll",
          disable_onmobile: "on"
        },
        shadow: 0,
        spinner: "spinner2",
        stopLoop: "on",
        stopAfterLoops: 0,
        shuffle: "off",
        autoHeight: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "0",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        }
      });
    }
}(jQuery));