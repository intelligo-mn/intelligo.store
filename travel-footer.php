<!-- Footer Section -->
<footer id="footer-section" class="footer-section">
    <div class="container">
        <div class="moduletable footer_menu">
            <ul class="nav menu">
                <li class="item-119"><a href="index.php/about-us.html">Нүүр хуудас</a></li>
                <li class="item-122"><a href="index.php/loogin-form.html">Аяллууд</a></li>
                <li class="item-123"><a href="index.php/register-form.html">Нэмэлт үйлчилгээ</a></li>
                <li class="item-120"><a href="#">Бидний тухай</a></li>
                <li class="item-121" style="border-right: none !important;"><a href="#">Холбоо барих</a>
                </li>
            </ul>
        </div>

        <!--<a id="back-to-top" class="back-top pull-right"><i class="arrow_up"></i> Go on top</a>-->
        <!--<script src="http://t1.extreme-dm.com/f.js" id="eXF-qpixel-0" async defer></script>-->
        <div class="mj-copyright text-center">
            © Copyright 2017 </div>
    </div>
</footer>
<!-- Footer Section -->

<!-- Light Box -->
<div class="modal light-box fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="false">
    <!-- Modal -->
    <div class="container">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div id="contact" class="modal-body">
                        <div class="popup-form">
                            <button type="button" class="close icon_close" data-dismiss="modal" aria-label="Close"></button>
                            <div class="moduletable  master_con_form">
                                <h1 class=" cont_header">Send your Query</h1>
                                <div id="contact_inner">
                                    <script type="text/javascript">
                                        var RecaptchaOptions = {
                                            theme: "red"
                                        };
                                    </script>
                                    <form action="http://dasinfomedia.co.uk/mojoomla/master/" method="POST" class="form-contact" id="contact-form" novalidate>
                                        <input type='hidden' name='form_key' id='form_key' value='de53c4119e05baef132540a450013a4b' />
                                        <fieldset>
                                            <!-- Alert Box-->

                                            <!-- Name Field -->
                                            <div class="form-group control-group col-md-6 col-sm-6">
                                                <input type="text" class="form-control" id="input_name" name="name" placeholder="Name*" required="required" />
                                                <p class="help-block"></p>
                                            </div>

                                            <!-- E-mail Field -->
                                            <div class="form-group control-group col-md-6 col-sm-6">
                                                <input type="text" class="form-control" id="input_compnay_name" name="email" placeholder="Email*" required="required" />
                                                <p class="help-block"></p>
                                            </div>

                                            <!-- Phone Field -->
                                            <div class="form-group control-group col-md-6 col-sm-6">
                                                <input type="text" class="form-control" id="input_phone" name="phone" placeholder="Telephone" />
                                                <p class="help-block"></p>
                                            </div>

                                            <!-- Subject Field -->
                                            <div class="control-group form-group col-md-6 col-sm-6">

                                                <input type="text" class="form-control" id="selectSubject" name="type" placeholder="Subject*" required="required" />
                                                <p class="help-block"></p>

                                            </div>

                                            <!-- Message Field -->
                                            <div class="control-group con_msg form-group col-md-12 col-sm-12">

                                                <input type="text" class="form-control" id="textarea_message" name="message" placeholder="Message*" required="required" />
                                                <p class="help-block"></p>
                                            </div>

                                            <!-- Submit Button -->
                                            <input type="submit" name="sbutton" value="SEND" class="send " />

                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
    </div>
</div>
<!-- Light Box -->
</div>
<!-- End Site Wrapper -->


<script type="text/javascript" src="/public/travel/libraries/modernizr/modernizr.custom.13711.js"></script>
<script type="text/javascript" src="/public/travel/libraries/jquery.easing.min.js"></script>
<!-- Easing Animation Effect -->

<script type="text/javascript" src="/public/travel/libraries/bootstrap/bootstrap.min.js"></script>
<script type="text/javascript" src="/public/travel/libraries/bootstrap/ie-emulation-modes-warning.js"></script>
<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
<script type="text/javascript" src="/public/travel/libraries/bootstrap/ie10-viewport-bug-workaround.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<!-- Font Elegant -->
<!--[if lte IE 7]><script src="/mojoomla/master/public/travel/libraries/fonts/elegant/lte-ie7.js"></script><![endif]-->

<script type="text/javascript" src="/public/travel/libraries/portfolio-filter/jquery.quicksand.js"></script>
<!-- Quicksand v1.4 -->
<script type="text/javascript" src="/public/travel/libraries/jquery.superslides.min.js"></script>
<!-- Superslides - v0.6.3-wip -->

<script type="text/javascript" src="/public/travel/libraries/roundabout.js"></script>
<!-- service Rounded slider -->
<script type="text/javascript" src="/public/travel/libraries/roundabout_shapes.js"></script>
<!-- service Rounded slider -->

<script type="text/javascript" src="/public/travel/libraries/jquery.animateNumber.min.js"></script>
<!-- Used for Animated Numbers -->
<script type="text/javascript" src="/public/travel/libraries/jquery.appear.js"></script>
<!-- It Loads jQuery when element is appears -->
<script type="text/javascript" src="/public/travel/libraries/jquery.knob.js"></script>
<!-- Used for Loading Circle -->

<script type="text/javascript" src="/public/travel/libraries/wow.min.js"></script>

<script type="text/javascript" src="/public/travel/libraries/owl-carousel/owl.carousel.min.js"></script>
<!-- Core Owl Carousel CSS File  *	v1.3.3 -->
<script type="text/javascript" src="/public/travel/libraries/video/jquery.mb.YTPlayer.js"></script>

<script type="text/javascript" src="/public/travel/js/jquery_accordion/jquery.akordeon.js"></script>

<script type="text/javascript" src="/public/travel/libraries/lightbox2/js/lightbox.min.js"></script>

<script type="text/javascript">
    jQuery(function(jQuery) {
        jQuery('.statistics-section').each(function() {
            var $this = jQuery(this);
            var myVal = jQuery(this).data("value");
            $this.appear(function() {
                jQuery('#project0').animateNumber({
                    number: 145
                }, 2000);
                jQuery('#project1').animateNumber({
                    number: 2456
                }, 2000);
                jQuery('#project2').animateNumber({
                    number: 3125
                }, 2000);
                jQuery('#project3').animateNumber({
                    number: 2478
                }, 2000);
            });
        });
        // Js for Comments on Details Page
        jQuery("#owl-client").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
        });
        // Js for Slide On homepage
        var owl_slide = jQuery(".main_slide");
        owl_slide.owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            pagination: false,
            transitionStyle: "goDown"
        });
        // Js for brand Slider  
        jQuery('#brand-image-slider').owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
        });
        jQuery('.akordeon').akordeon({
            buttons: true,
            toggle: true
        });
    });
</script>

<!-- Customized Scripts -->
<script type="text/javascript" src="/public/travel/js/functions.js"></script>

<script>
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '/js/analytics.js', 'ga');
    ga('create', 'UA-60724205-1', 'auto');
    ga('send', 'pageview');
</script>

</body>

<!-- Mirrored from dasinfomedia.co.uk/mojoomla/master/ by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 30 Jun 2017 06:49:28 GMT -->

</html>