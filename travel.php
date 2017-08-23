
<?php include "travel-header.php"?>
<div class="site_wrapper">

<?php include "travel-nav.php"?>
    <div id="photo-slider" class="slider-section">
        <div class="moduletable ">
            <!-- START REVOLUTION SLIDER 4.6 b1 fullwidth mode -->

            <div id="rev_slider_1_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" style="margin:0px auto;background-color:#E9E9E9;padding:0px;margin-top:0px;margin-bottom:0px;max-height:610px;">
                <div id="rev_slider_1_1" class="rev_slider fullwidthabanner" style="display:none;max-height:610px;height:610px;">
                    <ul>
                        <!-- SLIDE  1-->
                        <li data-transition="random" data-slotamount="7" data-masterspeed="300" data-saveperformance="off">
                            <!-- MAIN IMAGE -->
                            <img src="/public/travel/images/uniterevolution/slider/1.jpg" alt="1" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
                            <!-- LAYERS -->
                        </li>
                        <!-- SLIDE  2-->
                        <li data-transition="random" data-slotamount="7" data-masterspeed="300" data-saveperformance="off">
                            <!-- MAIN IMAGE -->
                            <img src="/public/travel/images/uniterevolution/slider/3_slider.jpg" alt="3_slider" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
                            <!-- LAYERS -->
                        </li>
                    </ul>
                    <div class="tp-bannertimer"></div>
                </div>

                <script type="text/javascript">
                    /******************************************
                                        -   PREPARE PLACEHOLDER FOR SLIDER  -
                                    ******************************************/

                    var setREVStartSize = function() {
                        var tpopt = new Object();
                        tpopt.startwidth = 960;
                        tpopt.startheight = 610;
                        tpopt.container = jQuery('#rev_slider_1_1');
                        tpopt.fullScreen = "off";
                        tpopt.forceFullWidth = "off";

                        tpopt.container.closest(".rev_slider_wrapper").css({
                            height: tpopt.container.height()
                        });
                        tpopt.width = parseInt(tpopt.container.width(), 0);
                        tpopt.height = parseInt(tpopt.container.height(), 0);
                        tpopt.bw = tpopt.width / tpopt.startwidth;
                        tpopt.bh = tpopt.height / tpopt.startheight;
                        if (tpopt.bh > tpopt.bw) tpopt.bh = tpopt.bw;
                        if (tpopt.bh < tpopt.bw) tpopt.bw = tpopt.bh;
                        if (tpopt.bw < tpopt.bh) tpopt.bh = tpopt.bw;
                        if (tpopt.bh > 1) {
                            tpopt.bw = 1;
                            tpopt.bh = 1
                        }
                        if (tpopt.bw > 1) {
                            tpopt.bw = 1;
                            tpopt.bh = 1
                        }
                        tpopt.height = Math.round(tpopt.startheight * (tpopt.width / tpopt.startwidth));
                        if (tpopt.height > tpopt.startheight && tpopt.autoHeight != "on") tpopt.height = tpopt.startheight;
                        if (tpopt.fullScreen == "on") {
                            tpopt.height = tpopt.bw * tpopt.startheight;
                            var cow = tpopt.container.parent().width();
                            var coh = jQuery(window).height();
                            if (tpopt.fullScreenOffsetContainer != undefined) {
                                try {
                                    var offcontainers = tpopt.fullScreenOffsetContainer.split(",");
                                    jQuery.each(offcontainers, function(e, t) {
                                        coh = coh - jQuery(t).outerHeight(true);
                                        if (coh < tpopt.minFullScreenHeight) coh = tpopt.minFullScreenHeight
                                    })
                                } catch (e) {}
                            }
                            tpopt.container.parent().height(coh);
                            tpopt.container.height(coh);
                            tpopt.container.closest(".rev_slider_wrapper").height(coh);
                            tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);
                            tpopt.container.css({
                                height: "100%"
                            });
                            tpopt.height = coh;
                        } else {
                            tpopt.container.height(tpopt.height);
                            tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);
                            tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);
                        }
                    };

                    /* CALL PLACEHOLDER */
                    setREVStartSize();

                    var tpj = jQuery;
                    tpj.noConflict();
                    var revapi1;

                    tpj(document).ready(function() {

                        if (tpj('#rev_slider_1_1').revolution == undefined)
                            revslider_showDoubleJqueryError('#rev_slider_1_1');
                        else
                            revapi1 = tpj('#rev_slider_1_1').show().revolution({
                                dottedOverlay: "none",
                                delay: 9000,
                                startwidth: 960,
                                startheight: 610,
                                hideThumbs: 200,

                                thumbWidth: 100,
                                thumbHeight: 50,
                                thumbAmount: 2,

                                simplifyAll: "off",
                                navigationType: "none",
                                navigationArrows: "solo",
                                navigationStyle: "round",
                                touchenabled: "on",
                                onHoverStop: "on",
                                nextSlideOnWindowFocus: "off",

                                swipe_threshold: 75,
                                swipe_min_touches: 1,
                                drag_block_vertical: false,

                                keyboardNavigation: "off",

                                navigationHAlign: "right",
                                navigationVAlign: "center",
                                navigationHOffset: 0,
                                navigationVOffset: 20,

                                soloArrowLeftHalign: "left",
                                soloArrowLeftValign: "center",
                                soloArrowLeftHOffset: 20,
                                soloArrowLeftVOffset: 0,

                                soloArrowRightHalign: "right",
                                soloArrowRightValign: "center",
                                soloArrowRightHOffset: 20,
                                soloArrowRightVOffset: 0,

                                shadow: 0,
                                fullWidth: "on",
                                fullScreen: "off",

                                spinner: "spinner0",

                                stopLoop: "off",
                                stopAfterLoops: -1,
                                stopAtSlide: -1,

                                shuffle: "off",

                                autoHeight: "off",
                                forceFullWidth: "off",

                                hideThumbsOnMobile: "off",
                                hideNavDelayOnMobile: 1500,
                                hideBulletsOnMobile: "off",
                                hideArrowsOnMobile: "off",
                                hideThumbsUnderResolution: 0,

                                hideSliderAtLimit: 0,
                                hideCaptionAtLimit: 0,
                                hideAllCaptionAtLilmit: 0,
                                startWithSlide: 0,
                                isJoomla: true
                            });

                    }); /*ready*/
                </script>

            </div>
            <!-- END REVOLUTION SLIDER -->
        </div>
    </div>

    <div class="slider-text">
    <div class="container">
        <div class="row">
            <div class="moduletable  slider_text_p col-md-12 col-sm-12 col-xs-12">
                <div class="main_slide">
                    <div class="slide_text ">
                        <p>"Манжуурын аялал"ХХК НАМРЫН урамшуулалт аялалдаа урьж байна.</p>
                    </div>

                    <div class="slide_text ">
                        <p>8-р сарын 06, 13, 20, 27</p>
                    </div>

                    <div class="slide_text ">
                        <p>350,000₮-ийн үнэ бүхий аяллаа 300,000₮ болгоод байна.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<section id="destination-section" class="destination-section">
	  <div class="container">
		   <div class="row">
				<div class="moduletable  master_destination"><div class="section-header animated fadeInDown"> <h2>Top Destinations</h2></div> 
	 
<div id="k2ModuleBox137" class="k2ItemsBlock  master_destination">

	    <div class="customNavigation">
    	<a class="btn next_destination">Next</a>
    		<a class="btn prev_destination">Previous</a>
     	
	 </div>
	  <ul id="k2-top-desti" class="animated fadeInUp owl-carousel owl-theme" style="opacity: 1; display: block;">
        <div class="owl-wrapper-outer"><div class="owl-wrapper" style="width: 3516px; left: 0px; display: block;"><div class="owl-item" style="width: 293px;"><li class="item even">

      <!-- Plugins: BeforeDisplay -->
      
      <!-- K2 Plugins: K2BeforeDisplay -->
      
      
      
      
      <!-- Plugins: AfterDisplayTitle -->
      
      <!-- K2 Plugins: K2AfterDisplayTitle -->
      
      <!-- Plugins: BeforeDisplayContent -->
      
      <!-- K2 Plugins: K2BeforeDisplayContent -->
      	   
	  	   <div class="destination_img">
	      <a class="moduleItemImage zoom_banner" href="/mojoomla/master/index.php/top-destination/item/27-beach-vacation-deals" title="Continue reading &quot;Beach Vaction Deals&quot;">
	      	<img class="img-circle" src="/mojoomla/master/media/k2/items/cache/787ae9ec9023a82f5aa7e4c1a64f73cb_M.jpg" alt="Beach Vaction Deals">
	      </a>
	   </div>	  
	   		
      <div class="destination_bottom">		
		  		   <div class="destination_title">
				<a class="moduleItemTitle" href="/mojoomla/master/index.php/top-destination/item/27-beach-vacation-deals">Beach Vaction Deals</a>
		   </div>	
		  

		  		  <div class="destination_intro">
			<p>Warm Sun,golden sand,Crystal blue water-what more do you need for relaxing vacation ?</p>
		  </div>
		  
	  
		  		  <div class="moduleItemExtraFields">
			  <ul>
																<li class="typeTextfield group5">
							
							<span class="moduleItemExtraFieldsLabel">Price</span>
							<span class="moduleItemExtraFieldsValue">$350</span>
							
							<div class="clr"></div>
						</li>
																																											  </ul>
		  </div>
		   		
  </div><!-- End Destination Bottom --> 
    
      
      <div class="clr"></div>

      <!-- Plugins: AfterDisplayContent -->
      
      <!-- K2 Plugins: K2AfterDisplayContent -->
      
      
      
      
      
			
			
			
      <!-- Plugins: AfterDisplay -->
      
      <!-- K2 Plugins: K2AfterDisplay -->
      
      <div class="clr"></div>
    </li></div><div class="owl-item" style="width: 293px;"><li class="item odd">

      <!-- Plugins: BeforeDisplay -->
      
      <!-- K2 Plugins: K2BeforeDisplay -->
      
      
      
      
      <!-- Plugins: AfterDisplayTitle -->
      
      <!-- K2 Plugins: K2AfterDisplayTitle -->
      
      <!-- Plugins: BeforeDisplayContent -->
      
      <!-- K2 Plugins: K2BeforeDisplayContent -->
      	   
	  	   <div class="destination_img">
	      <a class="moduleItemImage zoom_banner" href="/mojoomla/master/index.php/top-destination/item/28-cruise-summer-sale" title="Continue reading &quot;Cruise Sumer Sale&quot;">
	      	<img class="img-circle" src="/mojoomla/master/media/k2/items/cache/01f1a05053c6242fcfa23075e5b963c1_M.jpg" alt="Cruise Sumer Sale">
	      </a>
	   </div>	  
	   		
      <div class="destination_bottom">		
		  		   <div class="destination_title">
				<a class="moduleItemTitle" href="/mojoomla/master/index.php/top-destination/item/28-cruise-summer-sale">Cruise Sumer Sale</a>
		   </div>	
		  

		  		  <div class="destination_intro">
			<p>Receive up to $750 Onboard credit.Offer 5/31/15 common cruise deals include on board create offer		  </p></div>
		  
	  
		  		  <div class="moduleItemExtraFields">
			  <ul>
																<li class="typeTextfield group5">
							
							<span class="moduleItemExtraFieldsLabel">Price</span>
							<span class="moduleItemExtraFieldsValue">$250</span>
							
							<div class="clr"></div>
						</li>
																																											  </ul>
		  </div>
		   		
  </div><!-- End Destination Bottom --> 
    
      
      <div class="clr"></div>

      <!-- Plugins: AfterDisplayContent -->
      
      <!-- K2 Plugins: K2AfterDisplayContent -->
      
      
      
      
      
			
			
			
      <!-- Plugins: AfterDisplay -->
      
      <!-- K2 Plugins: K2AfterDisplay -->
      
      <div class="clr"></div>
    </li></div><div class="owl-item" style="width: 293px;"><li class="item even">

      <!-- Plugins: BeforeDisplay -->
      
      <!-- K2 Plugins: K2BeforeDisplay -->
      
      
      
      
      <!-- Plugins: AfterDisplayTitle -->
      
      <!-- K2 Plugins: K2AfterDisplayTitle -->
      
      <!-- Plugins: BeforeDisplayContent -->
      
      <!-- K2 Plugins: K2BeforeDisplayContent -->
      	   
	  	   <div class="destination_img">
	      <a class="moduleItemImage zoom_banner" href="/mojoomla/master/index.php/top-destination/item/29-authentic-europe" title="Continue reading &quot;Authentic Europe&quot;">
	      	<img class="img-circle" src="/mojoomla/master/media/k2/items/cache/fc34f61d23b74be53ee07d469bd32064_M.jpg" alt="Authentic Europe">
	      </a>
	   </div>	  
	   		
      <div class="destination_bottom">		
		  		   <div class="destination_title">
				<a class="moduleItemTitle" href="/mojoomla/master/index.php/top-destination/item/29-authentic-europe">Authentic Europe</a>
		   </div>	
		  

		  		  <div class="destination_intro">
			<p>Favorable exchange rates mean that all off europe is a deal! Authentic releting is beautifule pra		  </p></div>
		  
	  
		  		  <div class="moduleItemExtraFields">
			  <ul>
																<li class="typeTextfield group5">
							
							<span class="moduleItemExtraFieldsLabel">Price</span>
							<span class="moduleItemExtraFieldsValue">$330</span>
							
							<div class="clr"></div>
						</li>
																																											  </ul>
		  </div>
		   		
  </div><!-- End Destination Bottom --> 
    
      
      <div class="clr"></div>

      <!-- Plugins: AfterDisplayContent -->
      
      <!-- K2 Plugins: K2AfterDisplayContent -->
      
      
      
      
      
			
			
			
      <!-- Plugins: AfterDisplay -->
      
      <!-- K2 Plugins: K2AfterDisplay -->
      
      <div class="clr"></div>
    </li></div><div class="owl-item" style="width: 293px;"><li class="item odd">

      <!-- Plugins: BeforeDisplay -->
      
      <!-- K2 Plugins: K2BeforeDisplay -->
      
      
      
      
      <!-- Plugins: AfterDisplayTitle -->
      
      <!-- K2 Plugins: K2AfterDisplayTitle -->
      
      <!-- Plugins: BeforeDisplayContent -->
      
      <!-- K2 Plugins: K2BeforeDisplayContent -->
      	   
	  	   <div class="destination_img">
	      <a class="moduleItemImage zoom_banner" href="/mojoomla/master/index.php/top-destination/item/30-20-off-on-caribbean" title="Continue reading &quot;20% off on caribbean&quot;">
	      	<img class="img-circle" src="/mojoomla/master/media/k2/items/cache/1c0ae2205709722b62e843abc0471a55_M.jpg" alt="20% off on caribbean">
	      </a>
	   </div>	  
	   		
      <div class="destination_bottom">		
		  		   <div class="destination_title">
				<a class="moduleItemTitle" href="/mojoomla/master/index.php/top-destination/item/30-20-off-on-caribbean">20% off on caribbean</a>
		   </div>	
		  

		  		  <div class="destination_intro">
			<p>Warm up on beautiful Caribbean beach Go and Enjoy Island Time marriott Rewared Latin caribbean 20		  </p></div>
		  
	  
		  		  <div class="moduleItemExtraFields">
			  <ul>
																<li class="typeTextfield group5">
							
							<span class="moduleItemExtraFieldsLabel">Price</span>
							<span class="moduleItemExtraFieldsValue">$270</span>
							
							<div class="clr"></div>
						</li>
																																											  </ul>
		  </div>
		   		
  </div><!-- End Destination Bottom --> 
    
      <div class="clr"></div>

      <!-- Plugins: AfterDisplayContent -->
      
      <!-- K2 Plugins: K2AfterDisplayContent -->
      
      
      
      
      
			
			
			
      <!-- Plugins: AfterDisplay -->
      
      <!-- K2 Plugins: K2AfterDisplay -->
      
      <div class="clr"></div>
    </li></div><div class="owl-item" style="width: 293px;"><li class="item even lastItem">

      <!-- Plugins: BeforeDisplay -->
      
      <!-- K2 Plugins: K2BeforeDisplay -->
      
      
      
      
      <!-- Plugins: AfterDisplayTitle -->
      
      <!-- K2 Plugins: K2AfterDisplayTitle -->
      
      <!-- Plugins: BeforeDisplayContent -->
      
      <!-- K2 Plugins: K2BeforeDisplayContent -->
      	   
	  	   <div class="destination_img">
	      <a class="moduleItemImage zoom_banner" href="/mojoomla/master/index.php/top-destination/item/31-fabulous-las-vagas-deals" title="Continue reading &quot;Fabulous las vegas deals&quot;">
	      	<img class="img-circle" src="/mojoomla/master/media/k2/items/cache/fa55c8bad0e242eb7986dc1135b50adb_M.jpg" alt="Fabulous las vegas deals">
	      </a>
	   </div>	  
	   		
      <div class="destination_bottom">		
		  		   <div class="destination_title">
				<a class="moduleItemTitle" href="/mojoomla/master/index.php/top-destination/item/31-fabulous-las-vagas-deals">Fabulous las vegas deals</a>
		   </div>	
		  

		  		  <div class="destination_intro">
			<p>Nunc cursus libero purus ac congue ar lorem cursus ut sed vitae pullvinar massa idend porta neque		  </p></div>
		  
	  
		  		  <div class="moduleItemExtraFields">
			  <ul>
																<li class="typeTextfield group5">
							
							<span class="moduleItemExtraFieldsLabel">Price</span>
							<span class="moduleItemExtraFieldsValue">$340</span>
							
							<div class="clr"></div>
						</li>
																																											  </ul>
		  </div>
		   		
  </div><!-- End Destination Bottom --> 
    
      
      <div class="clr"></div>

      <!-- Plugins: AfterDisplayContent -->
      
      <!-- K2 Plugins: K2AfterDisplayContent -->
      
      
      
      
      
			
			
			
      <!-- Plugins: AfterDisplay -->
      
      <!-- K2 Plugins: K2AfterDisplay -->
      
      <div class="clr"></div>
    </li></div><div class="owl-item" style="width: 293px;"><li class="clearList"></li></div></div></div>
        
        
        
        
        
  <div class="owl-controls clickable" style="display: block;"><div class="owl-pagination"><div class="owl-page active"><span class=""></span></div><div class="owl-page"><span class=""></span></div></div></div></ul>
  
	
	
</div>
</div>
			</div>
        </div> 			
	</section>
<!-- Features Section -->
<section id="features-section">
    <div class="moduletable ">
        <div class="features-section ow-background-no-size" style="background-image: url('/public/travel/images/master/features/features-bg.jpg')">
            <div class="container">
                <div class="col-md-7">
                    <h2>Манай аялалууд</h2>
                    <div class="feature-box">

                        <div class="feature-box-inner">
                            <div class="col-md-4 col-sm-4 pull-right">
                                <i class="icon-feature fa fa-pagelines"></i>
                            </div>
                            <div class="col-md-8 col-sm-8 feature_text">
                                <h3 class="block-title">ХОВД АЙМАГААР АЯЛЪЯ</h3>
                                <p> Ховд аймаг нь 16 сумтай, аймгийн төв нь Ховд.Алтайн нуруу Монгол Алтайн их уулст оршино.</p>
                            </div>
                            <div class="line0 line">
                                <hr>
                                <i></i>
                            </div>
                        </div>

                        <div class="feature-box-inner">
                            <div class="col-md-4 col-sm-4 pull-right">
                                <i class="icon-feature fa fa-tree"></i>
                            </div>
                            <div class="col-md-8 col-sm-8 feature_text">
                                <h3 class="block-title">СЭЛЭНГЭ</h3>
                                <p>Сэлэнгэ аймаг маань Монгол орны нутгийн хойд хэсэгт Орхон Сэлэнгийн сав газрын дунд зэргийн уулс бүхий 41,2 мянган дөрвөлжин км нутаг дэвсгэр эзлэн оршдог аймаг юм.</p>
                            </div>
                            <div class="line1 line">
                                <hr>
                                <i></i>
                            </div>
                        </div>

                        <div class="feature-box-inner">
                            <div class="col-md-4 col-sm-4 pull-right">
                                <i class="icon-feature fa fa-leaf"></i>
                            </div>
                            <div class="col-md-8 col-sm-8 feature_text">
                                <h3 class="block-title">ЦОНЖИНБОЛДОГ - ЧИНГИС ХААНЫ ХӨШӨӨ</h3>
                                <p>Төв аймгийн Эрдэнэ суманд Цонжинболдог хэмээх газар бий. Энд Чингис хааны аварга том морьт хөшөө байдаг бөгөөд суурь барилгын хамт 40 метр өндөр юм.</p>
                            </div>
                            <div class="line2 line">
                                <hr>
                                <i></i>
                            </div>
                        </div>

                        <div class="feature-box-inner">
                            <div class="col-md-4 col-sm-4 pull-right">
                                <i class="icon-feature fa fa-road"></i>
                            </div>
                            <div class="col-md-8 col-sm-8 feature_text">
                                <h3 class="block-title">ХЭНТИЙ АЙМАГ</h3>
                                <p>Нутаг дэвсгэрийн хэмжээ 83.0 мянган хавтгай дөрвөлжин километр нутагтай. 2010 оны байдлаар хүн амын тоо 65811, малын тоо толгой 2180700. </p>
                            </div>
                            <div class="line3 line">
                                <hr>
                                <i></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-5">
                    <div class="mobile-iphone">
                        <img src="/public/travel/images/master/features/mobile.png" alt="mobile" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Features Section Over -->

<!-- Our Work -->
<section id="our-work" class="our-work">
    <div class="moduletable ">
        <div class="section-header">
            <h2>Аялалын төрлүүд</h2></div>
        <div id="k2ModuleBox112" class="k2ItemsBlock">

            <div id="portfolio-gallery-no-space" class="portfolio-gallery">
                <ul class="portfolio-categories sorting-menu">
                    <li data-value="all"><a class="active" href="#">Бүгд</a></li>
                    <li data-value="Hotels"><a href="#">Шууд нислэгтэй аялал</a></li>

                    <li data-value="Flights"><a href="#">Бизнес аялал</a></li>

                    <li data-value="Tours"><a href="#">Бал сарын аялал</a></li>

                </ul>
                <!--/.container -->

                <ul class="portfolio-list no-space">
                    <li class="col-md-3 col-sm-6" data-type="Tours" data-id="Tours-0">

                        <!-- Plugins: BeforeDisplay -->

                        <!-- K2 Plugins: K2BeforeDisplay -->

                        <!-- Plugins: AfterDisplayTitle -->

                        <!-- K2 Plugins: K2AfterDisplayTitle -->

                        <!-- Plugins: BeforeDisplayContent -->

                        <!-- K2 Plugins: K2BeforeDisplayContent -->

                        <div class="portfolio-image-block">
                            <a href=".html#">
                                <img src="/public/travel/media/k2/items/cache/71f67488b0857639cee631943a3fc6fa_M.jpg" alt="Rome city tour" />
                            </a>
                            <div class="portfolio-block-hover">
                                <a href="index.php/rome-city-tour.html" class="portfolio-title">
                Rome city tour         </a>
                                <h4>Tours</h4>

                            </div>
                        </div>

                        <div class="clr"></div>

                        <div class="clr"></div>

                        <!-- Plugins: AfterDisplayContent -->

                        <!-- K2 Plugins: K2AfterDisplayContent -->

                        <!-- Plugins: AfterDisplay -->

                        <!-- K2 Plugins: K2AfterDisplay -->

                        <div class="clr"></div>
                    </li>
                    <li class="col-md-3 col-sm-6" data-type="Hotels" data-id="Hotels-1">

                        <!-- Plugins: BeforeDisplay -->

                        <!-- K2 Plugins: K2BeforeDisplay -->

                        <!-- Plugins: AfterDisplayTitle -->

                        <!-- K2 Plugins: K2AfterDisplayTitle -->

                        <!-- Plugins: BeforeDisplayContent -->

                        <!-- K2 Plugins: K2BeforeDisplayContent -->

                        <div class="portfolio-image-block">
                            <a href=".html#">
                                <img src="/public/travel/media/k2/items/cache/184b7cb84d7b456c96a0bdfbbeaa5f14_M.jpg" alt="Hotel Hilton and Resorts" />
                            </a>
                            <div class="portfolio-block-hover">
                                <a href="index.php/travle-guide1.html" class="portfolio-title">
                Hotel Hilton and Resorts           </a>
                                <h4>Hotels</h4>

                            </div>
                        </div>

                        <div class="clr"></div>

                        <div class="clr"></div>

                        <!-- Plugins: AfterDisplayContent -->

                        <!-- K2 Plugins: K2AfterDisplayContent -->

                        <!-- Plugins: AfterDisplay -->

                        <!-- K2 Plugins: K2AfterDisplay -->

                        <div class="clr"></div>
                    </li>
                    <li class="col-md-3 col-sm-6" data-type="Flights" data-id="Flights-2">

                        <!-- Plugins: BeforeDisplay -->

                        <!-- K2 Plugins: K2BeforeDisplay -->

                        <!-- Plugins: AfterDisplayTitle -->

                        <!-- K2 Plugins: K2AfterDisplayTitle -->

                        <!-- Plugins: BeforeDisplayContent -->

                        <!-- K2 Plugins: K2BeforeDisplayContent -->

                        <div class="portfolio-image-block">
                            <a href=".html#">
                                <img src="/public/travel/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_M.jpg" alt="Spicejet" />
                            </a>
                            <div class="portfolio-block-hover">
                                <a href="index.php/flights/item/20-spicejet.html" class="portfolio-title">
                Spicejet           </a>
                                <h4>Flights</h4>

                            </div>
                        </div>

                        <div class="clr"></div>

                        <div class="clr"></div>

                        <!-- Plugins: AfterDisplayContent -->

                        <!-- K2 Plugins: K2AfterDisplayContent -->

                        <!-- Plugins: AfterDisplay -->

                        <!-- K2 Plugins: K2AfterDisplay -->

                        <div class="clr"></div>
                    </li>
                    <li class="col-md-3 col-sm-6" data-type="Tours" data-id="Tours-3">

                        <!-- Plugins: BeforeDisplay -->

                        <!-- K2 Plugins: K2BeforeDisplay -->

                        <!-- Plugins: AfterDisplayTitle -->

                        <!-- K2 Plugins: K2AfterDisplayTitle -->

                        <!-- Plugins: BeforeDisplayContent -->

                        <!-- K2 Plugins: K2BeforeDisplayContent -->

                        <div class="portfolio-image-block">
                            <a href=".html#">
                                <img src="/public/travel/media/k2/items/cache/233826a67be66a810b23a263230da62e_M.jpg" alt="Hawaii Life style" />
                            </a>
                            <div class="portfolio-block-hover">
                                <a href="index.php/component/k2/item/24-hawai-life-style.html" class="portfolio-title">
                Hawaii Life style          </a>
                                <h4>Tours</h4>

                            </div>
                        </div>

                        <div class="clr"></div>

                        <div class="clr"></div>

                        <!-- Plugins: AfterDisplayContent -->

                        <!-- K2 Plugins: K2AfterDisplayContent -->

                        <!-- Plugins: AfterDisplay -->

                        <!-- K2 Plugins: K2AfterDisplay -->

                        <div class="clr"></div>
                    </li>
                    <li class="col-md-3 col-sm-6" data-type="Tours" data-id="Tours-4">

                        <!-- Plugins: BeforeDisplay -->

                        <!-- K2 Plugins: K2BeforeDisplay -->

                        <!-- Plugins: AfterDisplayTitle -->

                        <!-- K2 Plugins: K2AfterDisplayTitle -->

                        <!-- Plugins: BeforeDisplayContent -->

                        <!-- K2 Plugins: K2BeforeDisplayContent -->

                        <div class="portfolio-image-block">
                            <a href=".html#">
                                <img src="/public/travel/media/k2/items/cache/9b2c4b44fb86522964124ed80d03c5e8_M.jpg" alt="Paris Tour" />
                            </a>
                            <div class="portfolio-block-hover">
                                <a href="index.php/component/k2/item/21-paris-tour.html" class="portfolio-title">
                Paris Tour         </a>
                                <h4>Tours</h4>

                            </div>
                        </div>

                        <div class="clr"></div>

                        <div class="clr"></div>

                        <!-- Plugins: AfterDisplayContent -->

                        <!-- K2 Plugins: K2AfterDisplayContent -->

                        <!-- Plugins: AfterDisplay -->

                        <!-- K2 Plugins: K2AfterDisplay -->

                        <div class="clr"></div>
                    </li>
                    <li class="col-md-3 col-sm-6" data-type="Flights" data-id="Flights-5">

                        <!-- Plugins: BeforeDisplay -->

                        <!-- K2 Plugins: K2BeforeDisplay -->

                        <!-- Plugins: AfterDisplayTitle -->

                        <!-- K2 Plugins: K2AfterDisplayTitle -->

                        <!-- Plugins: BeforeDisplayContent -->

                        <!-- K2 Plugins: K2BeforeDisplayContent -->

                        <div class="portfolio-image-block">
                            <a href=".html#">
                                <img src="/public/travel/media/k2/items/cache/f4b6dca0e2911082f0eb6e1df1a0e11d_M.jpg" alt="Jet Airways" />
                            </a>
                            <div class="portfolio-block-hover">
                                <a href="index.php/flights/item/19-jet-airways.html" class="portfolio-title">
                Jet Airways        </a>
                                <h4>Flights</h4>

                            </div>
                        </div>

                        <div class="clr"></div>

                        <div class="clr"></div>

                        <!-- Plugins: AfterDisplayContent -->

                        <!-- K2 Plugins: K2AfterDisplayContent -->

                        <!-- Plugins: AfterDisplay -->

                        <!-- K2 Plugins: K2AfterDisplay -->

                        <div class="clr"></div>
                    </li>
                    <li class="col-md-3 col-sm-6" data-type="Hotels" data-id="Hotels-6">

                        <!-- Plugins: BeforeDisplay -->

                        <!-- K2 Plugins: K2BeforeDisplay -->

                        <!-- Plugins: AfterDisplayTitle -->

                        <!-- K2 Plugins: K2AfterDisplayTitle -->

                        <!-- Plugins: BeforeDisplayContent -->

                        <!-- K2 Plugins: K2BeforeDisplayContent -->

                        <div class="portfolio-image-block">
                            <a href=".html#">
                                <img src="/public/travel/media/k2/items/cache/9caa2793658f3cc387f216157300b1ce_M.jpg" alt="Forte Do Vale" />
                            </a>
                            <div class="portfolio-block-hover">
                                <a href="index.php/hotels/item/7-forte-do-vale.html" class="portfolio-title">
                Forte Do Vale          </a>
                                <h4>Hotels</h4>

                            </div>
                        </div>

                        <div class="clr"></div>

                        <div class="clr"></div>

                        <!-- Plugins: AfterDisplayContent -->

                        <!-- K2 Plugins: K2AfterDisplayContent -->

                        <!-- Plugins: AfterDisplay -->

                        <!-- K2 Plugins: K2AfterDisplay -->

                        <div class="clr"></div>
                    </li>
                    <li class="col-md-3 col-sm-6" data-type="Tours" data-id="Tours-7">

                        <!-- Plugins: BeforeDisplay -->

                        <!-- K2 Plugins: K2BeforeDisplay -->

                        <!-- Plugins: AfterDisplayTitle -->

                        <!-- K2 Plugins: K2AfterDisplayTitle -->

                        <!-- Plugins: BeforeDisplayContent -->

                        <!-- K2 Plugins: K2BeforeDisplayContent -->

                        <div class="portfolio-image-block">
                            <a href=".html#">
                                <img src="/public/travel/media/k2/items/cache/e2bf3b11df0b872112757f1c2fee6e32_M.jpg" alt="Dubai city tour" />
                            </a>
                            <div class="portfolio-block-hover">
                                <a href="index.php/dubai.html" class="portfolio-title">
                Dubai city tour        </a>
                                <h4>Tours</h4>

                            </div>
                        </div>

                        <div class="clr"></div>

                        <div class="clr"></div>

                        <!-- Plugins: AfterDisplayContent -->

                        <!-- K2 Plugins: K2AfterDisplayContent -->

                        <!-- Plugins: AfterDisplay -->

                        <!-- K2 Plugins: K2AfterDisplay -->

                        <div class="clr"></div>
                    </li>
                    <li class="col-md-3 col-sm-6" data-type="Flights" data-id="Flights-8">

                        <!-- Plugins: BeforeDisplay -->

                        <!-- K2 Plugins: K2BeforeDisplay -->

                        <!-- Plugins: AfterDisplayTitle -->

                        <!-- K2 Plugins: K2AfterDisplayTitle -->

                        <!-- Plugins: BeforeDisplayContent -->

                        <!-- K2 Plugins: K2BeforeDisplayContent -->

                        <div class="portfolio-image-block">
                            <a href=".html#">
                                <img src="/public/travel/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_M.jpg" alt="Lufthansa Flight" />
                            </a>
                            <div class="portfolio-block-hover">
                                <a href="index.php/flights/item/17-lufthansa.html" class="portfolio-title">
                Lufthansa Flight           </a>
                                <h4>Flights</h4>

                            </div>
                        </div>

                        <div class="clr"></div>

                        <div class="clr"></div>

                        <!-- Plugins: AfterDisplayContent -->

                        <!-- K2 Plugins: K2AfterDisplayContent -->

                        <!-- Plugins: AfterDisplay -->

                        <!-- K2 Plugins: K2AfterDisplay -->

                        <div class="clr"></div>
                    </li>
                    <li class="col-md-3 col-sm-6" data-type="Hotels" data-id="Hotels-9">

                        <!-- Plugins: BeforeDisplay -->

                        <!-- K2 Plugins: K2BeforeDisplay -->

                        <!-- Plugins: AfterDisplayTitle -->

                        <!-- K2 Plugins: K2AfterDisplayTitle -->

                        <!-- Plugins: BeforeDisplayContent -->

                        <!-- K2 Plugins: K2BeforeDisplayContent -->

                        <div class="portfolio-image-block">
                            <a href=".html#">
                                <img src="/public/travel/media/k2/items/cache/ada9a09acea936d776a6f55c82778c43_M.jpg" alt="Gran Canaria" />
                            </a>
                            <div class="portfolio-block-hover">
                                <a href="index.php/hotels/item/6-gran-canariaf.html" class="portfolio-title">
                Gran Canaria           </a>
                                <h4>Hotels</h4>

                            </div>
                        </div>

                        <div class="clr"></div>

                        <div class="clr"></div>

                        <!-- Plugins: AfterDisplayContent -->

                        <!-- K2 Plugins: K2AfterDisplayContent -->

                        <!-- Plugins: AfterDisplay -->

                        <!-- K2 Plugins: K2AfterDisplay -->

                        <div class="clr"></div>
                    </li>
                    <li class="col-md-3 col-sm-6" data-type="Hotels" data-id="Hotels-10">

                        <!-- Plugins: BeforeDisplay -->

                        <!-- K2 Plugins: K2BeforeDisplay -->

                        <!-- Plugins: AfterDisplayTitle -->

                        <!-- K2 Plugins: K2AfterDisplayTitle -->

                        <!-- Plugins: BeforeDisplayContent -->

                        <!-- K2 Plugins: K2BeforeDisplayContent -->

                        <div class="portfolio-image-block">
                            <a href=".html#">
                                <img src="/public/travel/media/k2/items/cache/ffee2447b152494b43d9816faaea83c8_M.jpg" alt="Park Central" />
                            </a>
                            <div class="portfolio-block-hover">
                                <a href="index.php/hotels/item/5-park-central.html" class="portfolio-title">
                Park Central           </a>
                                <h4>Hotels</h4>

                            </div>
                        </div>

                        <div class="clr"></div>

                        <div class="clr"></div>

                        <!-- Plugins: AfterDisplayContent -->

                        <!-- K2 Plugins: K2AfterDisplayContent -->

                        <!-- Plugins: AfterDisplay -->

                        <!-- K2 Plugins: K2AfterDisplay -->

                        <div class="clr"></div>
                    </li>
                    <li class="col-md-3 col-sm-6 lastItem" data-type="Flights" data-id="Flights-11">

                        <!-- Plugins: BeforeDisplay -->

                        <!-- K2 Plugins: K2BeforeDisplay -->

                        <!-- Plugins: AfterDisplayTitle -->

                        <!-- K2 Plugins: K2AfterDisplayTitle -->

                        <!-- Plugins: BeforeDisplayContent -->

                        <!-- K2 Plugins: K2BeforeDisplayContent -->

                        <div class="portfolio-image-block">
                            <a href=".html#">
                                <img src="/public/travel/media/k2/items/cache/4965657af186b9092c7a96976ffe881c_M.jpg" alt="Air India" />
                            </a>
                            <div class="portfolio-block-hover">
                                <a href="index.php/flights/item/18-air-india.html" class="portfolio-title">
                Air India          </a>
                                <h4>Flights</h4>

                            </div>
                        </div>

                        <div class="clr"></div>

                        <div class="clr"></div>

                        <!-- Plugins: AfterDisplayContent -->

                        <!-- K2 Plugins: K2AfterDisplayContent -->

                        <!-- Plugins: AfterDisplay -->

                        <!-- K2 Plugins: K2AfterDisplay -->

                        <div class="clr"></div>
                    </li>

                </ul>
            </div>

        </div>
    </div>
</section>
<!-- Our Work Section Over -->

<!-- Why Choose Section -->
<section id="why-choose">
    <div class="moduletable ">

        <div class="why-choose" style="background-image: url('/public/travel/images/master/why-choose/why-choose-bg.jpg')">
            <div class="container">
                <div class="col-md-6 pull-right">
                    <div class="why-choose-inner">
                        <h2>Яагаад биднийг сонгох болсон бэ?</h2>
                        <div class="why-choose-box col-md-12 col-sm-8">
                            <a href="#" class="block-title">
                                <i class="icon-why fa fa-money"></i>
                                <span>Үнийн хувьд боломжийн</span>
                            </a>
                            <p>Хамгийн хямд зардлаар та аялах бүрэн боломжтой.</p>
                        </div>
                        <div class="why-choose-box col-md-12 col-sm-8">
                            <a href="#" class="block-title">
                                <i class="icon-why fa fa-thumbs-up"></i>
                                <span>Сэтгэл хангамж</span>
                            </a>
                            <p>Та бүхэнд сэтгэл ханамжийн баталгааг 100% өгөх болно.</p>
                        </div>
                        <div class="why-choose-box col-md-12 col-sm-8">
                            <a href="#" class="block-title">
                                <i class="icon-why fa fa-check-square-o"></i>
                                <span>Тухлаг орчин</span>
                            </a>
                            <p>Манай жуулчны бааз нь байгалийн үзэсгэлэнт газар байрлах бөгөөд цэвэр цэмцгэр тав тухтай орчинд таны алжаал ядаргааг тайлж оюун санааг тань сэргээхээс </p>
                        </div>
                        <div class="why-choose-box col-md-12 col-sm-8">
                            <a href="#" class="block-title">
                                <i class="icon-why fa fa-archive"></i>
                                <span>Амтат хоол</span>
                            </a>
                            <p>Мэргэжлийн тогоочийн гарын хоолыг амтархан зооглоорой.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Why Choose Section Over -->

</div>
</section>
<!-- Our Genius Over -->

<!-- Video Section -->
<div id="video-section" class="video-section">
    <div class="moduletable ">

        <a id="bgndVideo" class="player" data-property="{videoURL:'https://www.youtube.com/watch?v=-oGcb2_RwdU',containment:'.video-section', showControls:true, autoPlay:true, loop:true, vol:50, mute:true, startAt:10, opacity:1, addRaster:true, quality:'720p', optimizeDisplay:true}">My video</a>
        <!--BsekcY04xvQ-->

    </div>
</div>
<!-- Video Section Over -->

<!-- Statistics Section -->
<div id="statistics-section" class="statistics-section">
    <div class="container">
    </div>
</div>
<!-- Statistics Section Over -->

<!-- Blog Post -->
<section id="blog-section" class="blog-section">
    <div class="moduletable  k2_latest">
        <div class="section-header">
            <h2>Арга хэмжээ</h2></div>
        <div id="k2ModuleBox111" class="k2ItemsBlock  k2_latest">

            <div class="container no-padding">
                <div class="blog-inner">
                    <div class="col-md-4 col-sm-6 post">
                        <div class="entry-date">
                            <div class="date">
                                <h2>15</h2>
                                <h4>Jun</h4>
                            </div>

                            <div class="icon">
                                <i class="fa fa-heart"></i>

                                <i class="fa fa-comments"></i>

                            </div>
                        </div>
                        <div class="entry-cover">
                            <!-- Plugins: BeforeDisplay -->

                            <!-- K2 Plugins: K2BeforeDisplay -->

                            <a class="moduleItemImage" href="index.php/travle-guide1.html" title="Continue reading &quot;Hotel Hilton and Resorts&quot;">
                                <img src="/public/travel/media/k2/items/cache/184b7cb84d7b456c96a0bdfbbeaa5f14_M.jpg" alt="Hotel Hilton and Resorts" />
                            </a>

                            <!-- Plugins: AfterDisplayTitle -->

                            <!-- K2 Plugins: K2AfterDisplayTitle -->

                            <!-- Plugins: BeforeDisplayContent -->

                            <!-- K2 Plugins: K2BeforeDisplayContent -->

                            <div class="entry-header">
                                <a class="moduleItemTitle entry-title" href="index.php/travle-guide1.html">Hotel Hilton and Resorts</a>
                            </div>

                            <div class="post-date">

                                <span class="entry-date">Jun 15, 2015</span>

                                <span class="post-views"><i class="fa fa-heart"></i> 4080</span>
                            </div>

                            <p>Nunc cursus libero purus ac congue ar lorem cursus ut sed vitae pullvinar massa idend porta nequetiam elerisque mi id, consectetur adipi deese cing elit maus fringilla bibe endum.</p>

                            <div class="clr"></div>

                            <div class="clr"></div>

                            <!-- Plugins: AfterDisplayContent -->

                            <!-- K2 Plugins: K2AfterDisplayContent -->

                            <a class="moduleItemReadMore read-more" href="index.php/travle-guide1.html">
                Бүртгүүлэх      </a>

                            <!-- Plugins: AfterDisplay -->

                            <!-- K2 Plugins: K2AfterDisplay -->

                        </div>
                        <!-- End entry-cover -->
                    </div>
                    <div class="col-md-4 col-sm-6 post">
                        <div class="entry-date">
                            <div class="date">
                                <h2>15</h2>
                                <h4>Jun</h4>
                            </div>

                            <div class="icon">
                                <i class="fa fa-heart"></i>

                                <i class="fa fa-comments"></i>

                            </div>
                        </div>
                        <div class="entry-cover">
                            <!-- Plugins: BeforeDisplay -->

                            <!-- K2 Plugins: K2BeforeDisplay -->

                            <a class="moduleItemImage" href="index.php/hotels/item/7-forte-do-vale.html" title="Continue reading &quot;Forte Do Vale&quot;">
                                <img src="/public/travel/media/k2/items/cache/9caa2793658f3cc387f216157300b1ce_M.jpg" alt="Forte Do Vale" />
                            </a>

                            <!-- Plugins: AfterDisplayTitle -->

                            <!-- K2 Plugins: K2AfterDisplayTitle -->

                            <!-- Plugins: BeforeDisplayContent -->

                            <!-- K2 Plugins: K2BeforeDisplayContent -->

                            <div class="entry-header">
                                <a class="moduleItemTitle entry-title" href="index.php/hotels/item/7-forte-do-vale.html">Forte Do Vale</a>
                            </div>

                            <div class="post-date">

                                <span class="entry-date">Jun 15, 2015</span>

                                <span class="post-views"><i class="fa fa-heart"></i> 1131</span>
                            </div>

                            <p>Nunc cursus libero purus ac congue ar lorem cursus ut sed vitae pullvinar massa idend porta nequetiam elerisque mi id, consectetur adipi deese cing elit maus fringilla bibe endum.</p>

                            <div class="clr"></div>

                            <div class="clr"></div>

                            <!-- Plugins: AfterDisplayContent -->

                            <!-- K2 Plugins: K2AfterDisplayContent -->

                            <a class="moduleItemReadMore read-more" href="index.php/hotels/item/7-forte-do-vale.html">
                Бүртгүүлэх      </a>

                            <!-- Plugins: AfterDisplay -->

                            <!-- K2 Plugins: K2AfterDisplay -->

                        </div>
                        <!-- End entry-cover -->
                    </div>
                    <div class="col-md-4 col-sm-6 post lastItem">
                        <div class="entry-date">
                            <div class="date">
                                <h2>15</h2>
                                <h4>Jun</h4>
                            </div>

                            <div class="icon">
                                <i class="fa fa-heart"></i>

                                <i class="fa fa-comments"></i>

                            </div>
                        </div>
                        <div class="entry-cover">
                            <!-- Plugins: BeforeDisplay -->

                            <!-- K2 Plugins: K2BeforeDisplay -->

                            <a class="moduleItemImage" href="index.php/hotels/item/6-gran-canariaf.html" title="Continue reading &quot;Gran Canaria&quot;">
                                <img src="/public/travel/media/k2/items/cache/ada9a09acea936d776a6f55c82778c43_M.jpg" alt="Gran Canaria" />
                            </a>

                            <!-- Plugins: AfterDisplayTitle -->

                            <!-- K2 Plugins: K2AfterDisplayTitle -->

                            <!-- Plugins: BeforeDisplayContent -->

                            <!-- K2 Plugins: K2BeforeDisplayContent -->

                            <div class="entry-header">
                                <a class="moduleItemTitle entry-title" href="index.php/hotels/item/6-gran-canariaf.html">Gran Canaria</a>
                            </div>

                            <div class="post-date">

                                <span class="entry-date">Jun 15, 2015</span>

                                <span class="post-views"><i class="fa fa-heart"></i> 527</span>
                            </div>

                            <p>Nunc cursus libero purus ac congue ar lorem cursus ut sed vitae pullvinar massa idend porta nequetiam elerisque mi id, consectetur adipi deese cing elit maus fringilla bibe endum.</p>

                            <div class="clr"></div>

                            <div class="clr"></div>

                            <!-- Plugins: AfterDisplayContent -->

                            <!-- K2 Plugins: K2AfterDisplayContent -->

                            <a class="moduleItemReadMore read-more" href="index.php/hotels/item/6-gran-canariaf.html">
                Бүртгүүлэх          </a>

                            <!-- Plugins: AfterDisplay -->

                            <!-- K2 Plugins: K2AfterDisplay -->

                        </div>
                        <!-- End entry-cover -->
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>
<!-- Blog Post Over -->

<!-- What Clients Section -->
<section id="client-section" class="client-section">
    <div class="moduletable ">
        <div class="section-header">
            <h2>Жуулчидын сэтгэгдэл</h2></div>

        <div class="client-style1" style="background-image: url('/public/travel/images/master/client/client-big-1.jpg')">
            <svg width="0" height="0">
                <clipPath id="client-1">
                    <polygon points="0 152,1920 310,1920 0,0 0">
                    </polygon>
                </clipPath>
                <clipPath id="client-11">
                    <polygon points="0 752,1920 752,1920 0,0 0">
                    </polygon>
                </clipPath>
            </svg>
            <div class="client-hover">
                <h2>"Very nice and calm place, even with a lot of different Ger tourist camps. The best was strolling in the slopes of the mountain looking for small beautiful flowers."</h2>
                <p>by Ane Doe</p>
            </div>
        </div>

        <div class="client-style2 client-active" style="background-image: url('/public/travel/images/master/client/client-2.jpg')">
            <svg width="0" height="0">
                <clipPath id="client-2">
                    <polygon points="-1 450,1920 289,1920 158,0 0">
                    </polygon>
                </clipPath>
                <clipPath id="client-21">
                    <polygon points="-1 752,1920 666,1920 97,0 0">
                    </polygon>
                </clipPath>
            </svg>
            <div class="client-hover">
                <h2>"If you only have limited time in Mongolia try to get out of the city! UB is a nice city but the countryside is the real Mongolia."</h2>
                <p>by Ane Doe</p>
            </div>
        </div>

        <div class="client-style3" style="background-image: url('/public/travel/images/master/client/client-big-3.jpg')">
            <svg width="0" height="0">
                <clipPath id="client-3">
                    <polygon points="-1 326,1920 316,1920 0,0 155">
                    </polygon>
                </clipPath>
                <clipPath id="client-31">
                    <polygon points="-1 752,1920 756,1920 0,0 155">
                    </polygon>
                </clipPath>
            </svg>
            <div class="client-hover">
                <h2>"After busy days in Ulaanbaatar I decided to take a day trip to this place. It was great seeing beautiful natures, animals and visited the monastery on the top of the mountain. On the way you would be able to stop for seeing eagles, camels and take pictures with them if you wanted too."</h2>
                <p>by Ane Doe</p>
            </div>
        </div>

    </div>
</section>
<!-- What Clients Section Over -->

<!-- Project Section -->
<div id="project-section" class="project-section">
    <div class="container">
        <div class="col-md-6 col-sm-6 col-xs-12 start-project">
            <div class="moduletable ">
                <p class="news-header">have you fallen in love yet?</p>
                <script type="text/javascript">
                    var mcSignupErrorNotANumber = "must be a number.";
                    var mcSignupErrorInvalidEmail = "Please enter a valid email address.";
                    var mcSignupErrorRequired = "is required.";
                </script>
                <div id="mcSignupModule_5359" data-id="5359" class="mcSignupModule ">
                    <h2>Sign up For a Newsletter        </h2>
                    <div class="mcSignupFormWrapper">
                        <form action="http://dasinfomedia.co.uk/mojoomla/master/" method="post" id="mcSignupForm_5359" class="mcSignupForm" name="mcSignupForm5359" onsubmit="return false;">
                            <div>
                                <input type="text" name="fields[EMAIL]" class="master_text submitInt inputbox mcSignupRequired" value="" title="Email Address *" placeholder="Email Address *" />
                            </div>
                            <input type="hidden" name="email_type" value="html" />
                            <div>
                                <button type="button" class="master_button button mcSignupSubmit" data-id="5359"> <span>LET'S GO</span></button>
                            </div>

                            <input type="hidden" name="uid" value="0" />
                            <input type="hidden" name="ip" value="202.55.183.173" />
                            <input type="hidden" name="itemId" value="102" />
                            <input type="hidden" name="title" value="have you fallen in love yet?" />
                            <input type="hidden" name="2bfcef7bd37c807c378d8ca6861cfd77" value="1" /> </form>
                    </div>
                    <div class="ajaxLoader"></div>
                    <img src="/public/travel/media/mod_mailchimpsignup/images/ajax-loader.gif" alt="Please wait" style="display: none;" />
                    <div class="mcSignupResult" style="display:none;"></div>
                    <div class="mcSignupTryAgainWrapper" style="display:none;">
                        <a href="#" class="mcSignupTryAgain" data-id="5359">
            Try again        </a>
                    </div>
                </div>
            </div>

            <!--<a href="#"><span>LEt's Go</span></a>-->
            <div class="footer-item">
                <i class="icon_mail_alt"></i>
                <div class="footer-inner">
                    <p class="footer-item-title">Email</p>
                    <a class="footer-item-desc">Hello@maximum.com</a>

                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12 send-msg">
            <p>Want to tell us something?</p>
            <h2>Send a message</h2>
            <a href="#" data-toggle="modal" data-target="#myModal"><span>Book now</span></a>

            <div class="footer-item2">
                <i class="icon_mobile"></i>
                <div class="footer-inner">
                    <p class="footer-item-title">Phone</p>
                    <p class="footer-item-desc">(012)3456789</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Project Section Over -->
<?php include "travel-footer.php"?>