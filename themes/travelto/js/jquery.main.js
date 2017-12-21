(function($) {
    'use strict';

    /********************************
     ********** plugins**************
     *******************************/

    /**
     * Bootstrap Datepicker plugin
     */

    $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true,
        orientation: "auto left"
    }).datepicker('update', new Date());

    $("#datepicker5").datepicker({ 
        autoclose: true, 
        todayHighlight: true,
        orientation: "auto left"
    }).datepicker('update', new Date());

    $("#datepicker1").datepicker({ 
        autoclose: true, 
        todayHighlight: true,
        orientation: "auto left"
    }).datepicker('update', new Date());

    $("#datepicker11").datepicker({ 
        autoclose: true, 
        todayHighlight: true,
        orientation: "auto left"
    }).datepicker('update', new Date());

    $("#datepicker111").datepicker({ 
        autoclose: true, 
        todayHighlight: true,
        orientation: "auto left"
    }).datepicker('update', new Date());

    $("#datepicker12").datepicker({ 
        autoclose: true, 
        todayHighlight: true,
        orientation: "auto left"
    }).datepicker('update', new Date());

    $("#datepicker123").datepicker({ 
        autoclose: true, 
        todayHighlight: true,
        orientation: "auto left"
    }).datepicker('update', new Date());

    $("#datepicker22").datepicker({ 
        autoclose: true, 
        todayHighlight: true,
        orientation: "auto left"
    }).datepicker('update', new Date());

    $("#datepicker222").datepicker({ 
        autoclose: true, 
        todayHighlight: true,
        orientation: "auto left"
    }).datepicker('update', new Date());

    $("#datepicker3").datepicker({ 
        autoclose: true, 
        todayHighlight: true,
        orientation: "bottom left"
    }).datepicker('update', new Date());

    /**
     * search screen plugin
     * @param {object} options
     */
    function Search(options) {
        this.options = $.extend({
            container: null,
            hideOnClickOutside: false,
            menuActiveClass: 'nav-active',
            menuOpener: '.nav-opener',
            menuDrop: '.nav-drop',
            toggleEvent: 'click.search',
            outsideClickEvent: 'click.search touchstart.search pointerdown.search MSPointerDown.search'
        }, options);
        this.initStructure();
        this.attachEvents();
    }

    Search.prototype = {
        initStructure: function() {
            this.page = $('html');
            this.container = $(this.options.container);
            this.opener = this.container.find(this.options.menuOpener);
            this.drop = this.container.find(this.options.menuDrop);
        },
        attachEvents: function() {
            var self = this;
            if (activateResizeHandler) {
                activateResizeHandler();
                activateResizeHandler = null;
            }
            this.outsideClickHandler = function(e) {
                if (self.isOpened()) {
                    var target = $(e.target);
                    if (!target.closest(self.opener)
                        .length && !target.closest(self.drop)
                        .length) {
                        self.hide();
                    }
                }
            };
            this.openerClickHandler = function(e) {
                e.preventDefault();
                self.toggle();
            };
            this.opener.on(this.options.toggleEvent, this.openerClickHandler);
        },
        isOpened: function() {
            return this.container.hasClass(this.options.menuActiveClass);
        },
        show: function() {
            this.container.addClass(this.options.menuActiveClass);
            if (this.options.hideOnClickOutside) {
                this.page.on(this.options.outsideClickEvent,
                    this.outsideClickHandler);
            }
        },
        hide: function() {
            this.container.removeClass(this.options.menuActiveClass);
            if (this.options.hideOnClickOutside) {
                this.page.off(this.options.outsideClickEvent,
                    this.outsideClickHandler);
            }
        },
        toggle: function() {
            if (this.isOpened()) {
                this.hide();
            } else {
                this.show();
            }
        },
        destroy: function() {
            this.container.removeClass(this.options.menuActiveClass);
            this.opener.off(this.options.toggleEvent, this.clickHandler);
            this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
        }
    };

    var activateResizeHandler = function() {
        var win = $win,
            doc = $('html'),
            resizeClass = 'resize-active',
            flag, timer;
        var removeClassHandler = function() {
            flag = false;
            doc.removeClass(resizeClass);
        };
        var resizeHandler = function() {
            if (!flag) {
                flag = true;
                doc.addClass(resizeClass);
            }
            clearTimeout(timer);
            timer = setTimeout(removeClassHandler, 500);
        };
        win.on('resize orientationchange', resizeHandler);
    };

    $.fn.search = function(options) {
        return this.each(function() {
            var params = $.extend({}, options, {
                    container: this
                }),
                instance = new Search(params);
            $.data(this, 'Search', instance);
        });
    };

    /**
     * image adjustment plugin
     */
    var ImageStretcher = {
        getDimensions: function(data) {
            // calculate element coords to fit in mask
            var ratio = data.imageRatio || (data.imageWidth / data.imageHeight),
                slideWidth = data.maskWidth,
                slideHeight = slideWidth / ratio;

            if (slideHeight < data.maskHeight) {
                slideHeight = data.maskHeight;
                slideWidth = slideHeight * ratio;
            }
            return {
                width: slideWidth,
                height: slideHeight,
                top: (data.maskHeight - slideHeight) / 2,
                left: (data.maskWidth - slideWidth) / 2
            };
        },
        getRatio: function(image) {
            if (image.prop('naturalWidth')) {
                return image.prop('naturalWidth') / image.prop('naturalHeight');
            } else {
                var img = new Image();
                img.src = image.prop('src');
                return img.width / img.height;
            }
        },
        imageLoaded: function(image, callback) {
            var self = this;
            var loadHandler = function() {
                callback.call(self);
            };
            if (image.prop('complete')) {
                loadHandler();
            } else {
                image.one('load', loadHandler);
            }
        },
        resizeHandler: function() {
            var self = this;
            $.each(this.imgList, function(index, item) {
                if (item.image.prop('complete')) {
                    self.resizeImage(item.image, item.container);
                }
            });
        },
        resizeImage: function(image, container) {
            this.imageLoaded(image, function() {
                var styles = this.getDimensions({
                    imageRatio: this.getRatio(image),
                    maskWidth: container.width(),
                    maskHeight: container.height()
                });
                image.css({
                    width: styles.width,
                    height: styles.height,
                    marginTop: styles.top,
                    marginLeft: styles.left
                });
            });
        },
        add: function(options) {
            var container = $(options.container ? options.container : window),
                image = typeof options.image === 'string' ? container
                .find(options.image) : $(options.image);
            // resize image
            this.resizeImage(image, container);
            // add resize handler once if needed
            if (!this.win) {
                this.resizeHandler = $.proxy(this.resizeHandler, this);
                this.imgList = [];
                this.win = $win;
                this.win.on('resize orientationchange', this.resizeHandler);
            }
            // store item in collection
            this.imgList.push({
                container: container,
                image: image
            });
        }
    };

    /**
     * open close plugin
     * @param {object} options
     */
    function OpenClose(options) {
        this.options = $.extend({
            addClassBeforeAnimation: true,
            hideOnClickOutside: false,
            activeClass: 'active',
            opener: '.opener',
            slider: '.slide',
            animSpeed: 400,
            effect: 'fade',
            event: 'click'
        }, options);
        this.init();
    }
    OpenClose.prototype = {
        init: function() {
            if (this.options.holder) {
                this.findElements();
                this.attachEvents();
                this.makeCallback('onInit', this);
            }
        },
        findElements: function() {
            this.holder = $(this.options.holder);
            this.opener = this.holder.find(this.options.opener);
            this.slider = this.holder.find(this.options.slider);
        },
        attachEvents: function() {
            // add handler
            var self = this;
            this.eventHandler = function(e) {
                e.preventDefault();
                if (self.slider.hasClass(slideHiddenClass)) {
                    self.showSlide();
                } else {
                    self.hideSlide();
                }
            };
            self.opener.bind(self.options.event, this.eventHandler);
            // hover mode handler
            if (self.options.event === 'over') {
                self.opener.bind('mouseenter', function() {
                    if (!self.holder.hasClass(self.options.activeClass)) {
                        self.showSlide();
                    }
                });
                self.holder.bind('mouseleave', function() {
                    self.hideSlide();
                });
            }
            // outside click handler
            self.outsideClickHandler = function(e) {
                if (self.options.hideOnClickOutside) {
                    var target = $(e.target);
                    if (!target.is(self.holder) && !target.closest(self.holder)
                        .length) {
                        self.hideSlide();
                    }
                }
            };
            // set initial styles
            if (this.holder.hasClass(this.options.activeClass)) {
                $doc.bind('click touchstart', self.outsideClickHandler);
            } else {
                this.slider.addClass(slideHiddenClass);
            }
        },
        showSlide: function() {
            var self = this;
            if (self.options.addClassBeforeAnimation) {
                self.holder.addClass(self.options.activeClass);
            }
            self.slider.removeClass(slideHiddenClass);
            $doc.bind('click touchstart', self.outsideClickHandler);
            self.makeCallback('animStart', true);
            toggleEffects[self.options.effect].show({
                box: self.slider,
                speed: self.options.animSpeed,
                complete: function() {
                    if (!self.options.addClassBeforeAnimation) {
                        self.holder.addClass(self.options.activeClass);
                    }
                    self.makeCallback('animEnd', true);
                }
            });
        },
        hideSlide: function() {
            var self = this;
            if (self.options.addClassBeforeAnimation) {
                self.holder.removeClass(self.options.activeClass);
            }
            $doc.unbind('click touchstart', self.outsideClickHandler);
            self.makeCallback('animStart', false);
            toggleEffects[self.options.effect].hide({
                box: self.slider,
                speed: self.options.animSpeed,
                complete: function() {
                    if (!self.options.addClassBeforeAnimation) {
                        self.holder.removeClass(self.options.activeClass);
                    }
                    self.slider.addClass(slideHiddenClass);
                    self.makeCallback('animEnd', false);
                }
            });
        },
        destroy: function() {
            this.slider.removeClass(slideHiddenClass)
                .css({
                    display: ''
                });
            this.opener.unbind(this.options.event, this.eventHandler);
            this.holder.removeClass(this.options.activeClass)
                .removeData(
                    'OpenClose');
            $doc.unbind('click touchstart', this.outsideClickHandler);
        },
        makeCallback: function(name) {
            if (typeof this.options[name] === 'function') {
                var args = Array.prototype.slice.call(arguments);
                args.shift();
                this.options[name].apply(this, args);
            }
        }
    };
    // add stylesheet for slide on DOMReady
    var slideHiddenClass = 'js-slide-hidden';
    (function() {
        var tabStyleSheet = $('<style type="text/css">')[0];
        var tabStyleRule = '.' + slideHiddenClass;
        tabStyleRule += '{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important}';
        if (tabStyleSheet.styleSheet) {
            tabStyleSheet.styleSheet.cssText = tabStyleRule;
        } else {
            tabStyleSheet.appendChild(document.createTextNode(tabStyleRule));
        }
        $('head')
            .append(tabStyleSheet);
    }());
    // animation effects
    var toggleEffects = {
        slide: {
            show: function(o) {
                o.box.stop(true)
                    .hide()
                    .slideDown(o.speed, o.complete);
            },
            hide: function(o) {
                o.box.stop(true)
                    .slideUp(o.speed, o.complete);
            }
        },
        fade: {
            show: function(o) {
                o.box.stop(true)
                    .hide()
                    .fadeIn(o.speed, o.complete);
            },
            hide: function(o) {
                o.box.stop(true)
                    .fadeOut(o.speed, o.complete);
            }
        },
        none: {
            show: function(o) {
                o.box.hide()
                    .show(0, o.complete);
            },
            hide: function(o) {
                o.box.hide(0, o.complete);
            }
        }
    };
    // jQuery plugin interface
    $.fn.openClose = function(opt) {
        return this.each(function() {
            $(this)
                .data('OpenClose', new OpenClose($.extend(opt, {
                    holder: this
                })));
        });
    };

    /**
     * Accordion plugin
     * @param {object} opt
     */
    $.fn.slideAccordion = function(opt) {
        // default options
        var options = $.extend({
            addClassBeforeAnimation: false,
            allowClickWhenExpanded: false,
            activeClass: 'active',
            opener: '.opener',
            slider: '.slide',
            animSpeed: 300,
            collapsible: true,
            event: 'click'
        }, opt);
        return this.each(function() {
            // options
            var accordion = $(this);
            var items = accordion.find(':has(' + options.slider + ')');
            items.each(function() {
                var item = $(this);
                var opener = item.find(options.opener);
                var slider = item.find(options.slider);
                opener.bind(options.event, function(e) {
                    if (item.hasClass(options.activeClass)) {
                        if (options.allowClickWhenExpanded) {
                            return;
                        } else if (options.collapsible) {
                            slider.slideUp(options.animSpeed, function() {
                                hideSlide(slider);
                                item.removeClass(options.activeClass);
                            });
                        }
                    } else {
                        // show active
                        var levelItems = item.siblings('.' + options.activeClass);
                        var sliderElements = levelItems.find(options.slider);
                        item.addClass(options.activeClass);
                        showSlide(slider)
                            .hide()
                            .slideDown(options.animSpeed);
                        // collapse others
                        sliderElements.slideUp(options.animSpeed, function() {
                            levelItems.removeClass(options.activeClass);
                            hideSlide(sliderElements);
                        });
                    }
                    e.preventDefault();
                });
                if (item.hasClass(options.activeClass))
                    showSlide(slider);
                else
                    hideSlide(slider);
            });
        });
    };
    // accordion slide visibility
    var showSlide = function(slide) {
        return slide.css({
            position: '',
            top: '',
            left: '',
            width: ''
        });
    };
    var hideSlide = function(slide) {
        return slide.show()
            .css({
                position: 'absolute',
                top: -9999,
                left: -9999,
                width: slide.width()
            });
    };

    // main elements
    var $body = $('body');
    var $win = $(window);
    var $doc = $(document);

    // remove page load screen on load
    $win.on('load', function() {
        $('#pageLoad')
            .remove();
    });

    // apply placehoder for old browsers
    $('input, textarea')
        .placeholder();

    // manage same height for sibling elements
    $body.addClass('js-ready');
    $('.same-height, .table tr')
        .each(function(i, el) {
            var $this = $(el);
            $this.find('.height, td .cell')
                .matchHeight({
                    byRow: true
                });
        });

    // counter sectiion
    var $counter = $('.counter');
    if ($counter.length) {
        $counter.counterUp({
            delay: 10,
            time: 2000
        });
    }

    // apply fancybox
    var $fancybox = $('.fancybox');
    if ($fancybox.length) {
        $fancybox.fancybox({
            padding: 0,
            margin: 0
        });
    }

    // Owl Carousel Carousels
    $("#partner-slide") // Partner Block Carousel
        .owlCarousel({
            items: 6,
            slideSpeed: 300,
            itemsTablet: [768, 3],
            itemsMobile: [480, 1],
            autoPlay: 3000,
            touchDrag: false,
            pagination: false,
            mouseDrag: false
        });
    $("#testimonial-home-slide") // Testimonial Home Carousel
        .owlCarousel({
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            touchDrag: false,
            mouseDrag: false
        });
    $("#tour-slide") // Tour Detail Carousel
        .owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            touchDrag: false,
            pagination: false,
            mouseDrag: false
        });

    $("#common-slide") // Common Carousel
        .owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            touchDrag: false,
            pagination: false,
            mouseDrag: false
        });
    $("#common-multiple-slide") // Common Carousel Multiple
        .owlCarousel({
            items: 3,
            slideSpeed: 300,
            itemsTablet: [768, 2],
            itemsMobile: [480, 1],
            autoPlay: 3000,
            touchDrag: false,
            pagination: true,
            mouseDrag: false
        });

    $("#common-multiple-slide-v1") // Common Carousel Multiple
        .owlCarousel({
            items: 3,
            slideSpeed: 300,
            itemsTablet: [768, 2],
            itemsMobile: [480, 1],
            autoPlay: false,
            touchDrag: false,
            pagination: false,
            navigation: true,
            mouseDrag: false
        });

    //JCF - $ Custom Form
    jcf.setOptions('Select', {
        wrapNative: false,
        wrapNativeOnMobile: false
    });

    jcf.replaceAll();

    // scroll to element
    $('.smooth-scroll')
        .click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body')
                        .animate({
                            scrollTop: target.offset()
                                .top
                        }, 1000);
                    return false;
                }
            }
        });

    // scroll to top
    $win.scroll(function() {
        if ($(this).scrollTop() >= 100) {        
            $('#scroll-to-top').fadeIn(200);    
        } else {
            $('#scroll-to-top').fadeOut(200);   
        }
    });
    $('#scroll-to-top').click(function() {      
        $('body,html').animate({
            scrollTop : 0                      
        }, 1000);
    });

    //Progress Bar Animation
    function isScrolledIntoView(elem) {
        var docViewTop = $win.scrollTop();
        var docViewBottom = docViewTop + $win.height();
        var elemTop = $(elem)
            .offset()
            .top;
        var elemBottom = elemTop + $(elem)
            .height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    var $progressBar = $('.progress-bar');
    if ($progressBar.length) {
        $win.scroll(function() {
            $progressBar.each(function() {
                var $this = $(this);
                if (isScrolledIntoView(this) === true) {
                    var bar_value = $this.attr('aria-valuenow') + '%';
                    $this.width(bar_value);
                }
            });
        });
    }

    // Search form Auto Complete
    var availableTags = window.availableTags;
    availableTags = ["Bungee Jumping", "Hiking and Camping", "Trekking",
     "Wildlife", "Polar", "Peak Climbing", "Mountaineering",
     "Mountain Biking", "Extreme Biking", "Scuba Diving", "Diving",
     "Hunting", "Fishing", "Boating", "Sailing", "Extreme"];

    $('#search-input')
        .autocomplete({
            source: availableTags,
            appendTo: '.search-wrap .form-group'
        });

    //	Overwrite Bootstrap Dropdown Feature
    $doc.on('click', '.dropdown', function(e) {
        e.stopPropagation();
    });

    // tab open on hover
    $('.nav-hover > li > a').hover(function() {
      $(this).tab('show');
    });

    // Convert Select Menu to Tab
    $('#tabSelect')
        .on('change', function(e) {
            var id = $(this)
                .val();
            $('a[href="' + id + '"]')
                .tab('show');
        });

    //Image resize on Window Resize
    var doImageStretch = function() {
        $win.trigger('fontresize');
        $('.bg-stretch')
            .each(function() {
                var container = $(this),
                    img = container.find('img');
                ImageStretcher.resizeImage(img, container);
            });
    };
    $win.on('load', doImageStretch);
    $win.on('resize orientationchange', function() {
        setTimeout(doImageStretch, 200);
    });

    // on document ready
    $doc.ready(function() {
        var $sliderRange = $('#slider-range');
        var $amount = $('#amount');
        if ($sliderRange.length) {

            // apply range slider
            $sliderRange.slider({
                range: true,
                min: 0,
                max: 3000,
                values: [400, 2600],
                slide: function(event, ui) {
                    $amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
                }
            });
            $amount.val('$' + $sliderRange.slider('values', 0) + ' - $' + $sliderRange.slider('values', 1));
        }
    });

    // Slider Swipe on Mobile
    $('.ui-slider-handle')
        .draggable();

    // Apply Stellar Parallax
    $doc.ready(function() {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 0
        });
        // Initialize WOW Animation
        new WOW()
            .init();
    });

    //Sticky Header
    var onSCroll = function() {
        var sticky = $('#header'),
            scroll = $win.scrollTop();
        sticky.toggleClass('fixed-position', scroll >= 120);
    };
    $win.scroll(onSCroll);
    onSCroll();

    // apply open close plugin
    var $openClose = $('.open-close');
    if ($openClose.length) {
        $openClose.openClose({
            activeClass: 'active',
            opener: '.cart',
            slider: '.drop-down',
            hideOnClickOutside: true,
            animSpeed: 0,
            effect: 'slide'
        });
    }

    var $langHolder = $('.language-holder');
    if ($langHolder.length) {
        $langHolder.openClose({
            activeClass: 'active',
            opener: '.lang-opener',
            slider: '.lang-slide',
            hideOnClickOutside: true,
            animSpeed: 0,
            effect: 'slide'
        });
    }

    // apply accordion
    var $footerHolder = $('.footer-holder');
    if ($footerHolder.length) {
        $footerHolder.slideAccordion({
            opener: 'h3',
            slider: '.slide',
            collapsible: false,
            animSpeed: 300
        });
    }

    var $detailAcc = $('.detail-accordion');
    if ($detailAcc.length) {
        $detailAcc.slideAccordion({
            opener: '> a',
            slider: '.slide',
            collapsible: true,
            animSpeed: 300
        });
    }

    var $fiveColl = $('.has-mega-dropdown .five-col');
    if ($fiveColl.length) {
        $fiveColl.slideAccordion({
            opener: '.title',
            slider: 'ul',
            collapsible: false,
            animSpeed: 300
        });
    }

    // apply search plugin
    $body.search({
        hideOnClickOutside: false,
        menuActiveClass: 'search-active',
        menuOpener: '.search-opener',
        menuDrop: '.form-group'
    });

    $body.search({
        hideOnClickOutside: false,
        menuActiveClass: 'filter-active',
        menuOpener: '.btn-filter'
    });

}(jQuery));