<!-- Header Section -->
<header id="header-section" class="header-section">
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-sm-2 col-xs-6 logo-block no-padding">
                <a href="#"><img src="/public/travel/images/master/logo.png" alt="logo" /></a>
            </div>
            <div class="col-md-10 col-sm-12 col-xs-12 menu-block">
                <div class="moduletable ">
                    <div class="icemegamenu master_mega pull-right">
                        <div class="ice-megamenu-toggle"><a class="navbar-toggle collapsed" data-toggle="collapse" data-target=".nav-collapse">Menu</a></div>
                        <div class="nav-collapse icemegamenu collapse">
                            <ul id="icemegamenu" class="meganizr mzr-slide mzr-responsive">
                                <li id="iceMenu_102" class="iceMenuLiLevel_1 active"><a href="index.html" class="icemega_active iceMenuTitle"><span class="icemega_title icemega_nosubtitle">НҮҮР ХУУДАС</span></a></li>
                                <li id="iceMenu_104" class="iceMenuLiLevel_1"><a href="index.php/hotels.html" class=" iceMenuTitle"><span class="icemega_title icemega_nosubtitle">Аяллууд</span></a></li>

                                <li id="iceMenu_182" class="iceMenuLiLevel_1 mzr-drop parent">
                                    <a href="index.php/flights.html" class=" iceMenuTitle">
                                        <span class="icemega_title icemega_nosubtitle">НЭМЭЛТ ҮЙЛЧИЛГЭЭ </span></a>
                                    <ul class="icesubMenu icemodules sub_level_1" style="width:auto">
                                        <li>
                                            <div style="float:left;width:200px" class="iceCols">
                                                <ul>
                                                    <li id="iceMenu_197" class="iceMenuLiLevel_2"><a href="index.php/flights/domestic.html" class=" iceMenuTitle"><span class="icemega_title icemega_nosubtitle">БИДНИЙ ТУХАЙ</span></a></li>
                                                    <li id="iceMenu_198" class="iceMenuLiLevel_2"><a href="index.php/flights/international-flights.html" class=" iceMenuTitle"><span class="icemega_title icemega_nosubtitle">Бизнес аялал</span></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li id="iceMenu_103" class="iceMenuLiLevel_1 mzr-drop parent"><a href="#" class=" iceMenuTitle"><span class="icemega_title icemega_nosubtitle">БИДНИЙ ТУХАЙ</span></a>
                                
                                </li>
                                <li id="iceMenu_105" class="iceMenuLiLevel_1"><a href="/guide" class=" iceMenuTitle"><span class="icemega_title icemega_nosubtitle"> ХОЛБОО БАРИХ</span></a></li>
                                <li id="iceMenu_107" class="iceMenuLiLevel_1"><a href="/contact" class=" iceMenuTitle"><span class="icemega_title icemega_nosubtitle"></span></a></li>
                            </ul>
                        </div>
                    </div>

                    <script type="text/javascript">
                        jQuery(document).ready(function() {
                            var browser_width1 = jQuery(window).width();
                            jQuery("#icemegamenu").find(".icesubMenu").each(function(index) {
                                var offset1 = jQuery(this).offset();
                                var xwidth1 = offset1.left + jQuery(this).width();
                                if (xwidth1 >= browser_width1) {
                                    jQuery(this).addClass("ice_righttoleft");
                                }
                            });
                        })
                        jQuery(window).resize(function() {
                            var browser_width = jQuery(window).width();
                            jQuery("#icemegamenu").find(".icesubMenu").removeClass("ice_righttoleft");
                            jQuery("#icemegamenu").find(".icesubMenu").each(function(index) {
                                var offset = jQuery(this).offset();
                                var xwidth = offset.left + jQuery(this).width();
                                if (xwidth >= browser_width) {
                                    jQuery(this).addClass("ice_righttoleft");
                                }
                            });
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
</header>