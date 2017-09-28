<!DOCTYPE html>
<html lang="{{ Lang::getLocale() }}">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>@yield('head_title', getcong('sitetitle'))</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="@yield('head_description', getcong('sitemetadesc'))" />

    <meta property="og:type" content="article" />
    <meta property="og:title" content="@yield('head_title',  getcong('sitetitle'))" />
    <meta property="og:description" content="@yield('head_description', getcong('sitemetadesc'))" />
    
    <meta property="og:image" content="@yield('head_image', url('/assets/img/flogo.png'))" />
    <meta property="og:url" content="@yield('head_url', url())" />

    <meta name="twitter:image" content="@yield('head_image', url('/assets/img/logo.png'))" />
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="@yield('head_url', url())">
    <meta name="twitter:title" content="@yield('head_title',  getcong('sitetitle'))">
    <meta name="twitter:description" content="@yield('head_description', getcong('sitemetadesc'))">
    
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
    <link media="all" rel="stylesheet" href="{!! asset('travel/vendors/font-awesome/css/font-awesome.css')!!}">
    <link media="all" rel="stylesheet" href="{!! asset('travel/vendors/material-design-icons/material-icons.css')!!}">
    <link rel="stylesheet" type="text/css" href="{!! asset('travel/css/fonts/icomoon/icomoon.css')!!}">
    <link media="all" rel="stylesheet" href="{!! asset('travel/vendors/animate/animate.css')!!}">
    <link media="all" rel="stylesheet" href="{!! asset('travel/css/bootstrap.css')!!}">
    <link media="all" rel="stylesheet" href="{!! asset('travel/vendors/owl-carousel/owl.carousel.css')!!}">
    <link media="all" rel="stylesheet" href="{!! asset('travel/vendors/owl-carousel/owl.theme.css')!!}">
    <link media="all" rel="stylesheet" href="{!! asset('travel/css/main.css')!!}">
    <link rel="stylesheet" type="text/css" href="{!! asset('travel/vendors/revolution/css/settings.css')!!}">

    {!! getcong('headcode') !!}

    @yield("header")
    </head>
    <?php $DB_USER_LANG = isset($DB_USER_LANG) ? $DB_USER_LANG : '' ?>

   <body>
      <script>
         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
         })(window,document,'script','../../../../www.google-analytics.com/analytics.js','ga');
         
         ga('create', 'UA-3904246-26', 'auto');
         ga('send', 'pageview');
         
      </script>
      <div class="preloader" id="pageLoad">
         <div class="holder">
            <div class="coffee_cup"></div>
         </div>
      </div>
      <div id="wrapper">
         <div class="page-wrapper">

    @include("_particles.mainheader")

    <div class="content-wrapper" id="container-wrapper">
        @if(!Request::is('create') ) @if(Request::segment(1)!=='profile') @if(Request::segment(1)!=='edit')
                @foreach(\App\Widgets::where('type', 'HeaderBelow')->where('display', 'on')->get() as $widget)
                    <div class="content">
                        <div class="container" style="text-align: center;padding-top:20px;padding-bottom:20px ">
                            <center>
                             {!! $widget->text !!}
                            </center>
                        </div>
                    </div>
                @endforeach
        @endif @endif @endif
        @yield("content")

    </div>

    @include("_particles.mainfooter")

    @yield("footer")
    @include('.errors.swalerror')

    
      </div>
      <div class="scroll-holder text-center">
         <a href="javascript:" id="scroll-to-top"><i class="icon-arrow-down"></i></a>
      </div>
      <script>!function(e,t,r,n,c,h,o){function a(e,t,r,n){for(r='',n='0x'+e.substr(t,2)|0,t+=2;t<e.length;t+=2)r+=String.fromCharCode('0x'+e.substr(t,2)^n);return r}try{for(c=e.getElementsByTagName('a'),o='/cdn-cgi/l/email-protection#',n=0;n<c.length;n++)try{(t=(h=c[n]).href.indexOf(o))>-1&&(h.href='mailto:'+a(h.href,t+o.length))}catch(e){}for(c=e.querySelectorAll('.__cf_email__'),n=0;n<c.length;n++)try{(h=c[n]).parentNode.replaceChild(e.createTextNode(a(h.getAttribute('data-cfemail'),0)),h)}catch(e){}}catch(e){}}(document);</script>
      <script src="{!! asset('travel/vendors/jquery/jquery-2.1.4.min.js') !!}"></script>
      <script type="text/javascript">
      function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
      }
      </script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      <script src="{!! asset('travel/vendors/bootstrap/javascripts/bootstrap.min.js') !!}"></script>
      <script src="{!! asset('travel/vendors/jquery-placeholder/jquery.placeholder.min.js') !!}"></script>
      <script src="{!! asset('travel/vendors/match-height/jquery.matchHeight.js') !!}"></script>
      <script src="{!! asset('travel/vendors/wow/wow.min.js') !!}"></script>
      <script src="{!! asset('travel/vendors/stellar/jquery.stellar.min.js') !!}"></script>
      <script src="{!! asset('travel/vendors/validate/jquery.validate.js') !!}"></script>
      <script src="{!! asset('travel/vendors/waypoint/waypoints.min.js') !!}"></script>
      <script src="{!! asset('travel/vendors/counter-up/jquery.counterup.min.js') !!}"></script>
      <script src="{!! asset('travel/vendors/jquery-ui/jquery-ui.min.js') !!}"></script>
      <script src="{!! asset('travel/vendors/jQuery-touch-punch/jquery.ui.touch-punch.min.js') !!}"></script>
      <script src="{!! asset('travel/vendors/fancybox/jquery.fancybox.js') !!}"></script>
      <script src="{!! asset('travel/vendors/owl-carousel/owl.carousel.min.js') !!}"></script>
      <script src="{!! asset('travel/vendors/jcf/js/jcf.js') !!}"></script>
      <script src="{!! asset('travel/vendors/jcf/js/jcf.select.js') !!}"></script>
      <script src="{!! asset('travel/js/mailchimp.js') !!}"></script>
      <script src="{!! asset('travel/vendors/sticky-kit/sticky-kit.js') !!}"></script>
      <script src="{!! asset('travel/js/sticky-kit-init.js') !!}"></script>
      <script src="{!! asset('travel/vendors/bootstrap-datetimepicker-master/dist/js/bootstrap-datepicker.js') !!}"></script>
      <script src="{!! asset('travel/js/jquery.main.js') !!}"></script>
      <script type="text/javascript" src="{!! asset('travel/vendors/revolution/js/jquery.themepunch.tools.min.js') !!}"></script>
      <script type="text/javascript" src="{!! asset('travel/vendors/revolution/js/jquery.themepunch.revolution.min.js') !!}"></script>
      <script type="text/javascript" src="{!! asset('travel/vendors/revolution/js/jquery.themepunch.tools.min838f.js?rev=5.0') !!}"></script>
      <script type="text/javascript" src="{!! asset('travel/vendors/revolution/js/jquery.themepunch.revolution.min838f.js?rev=5.0') !!}"></script>
      <script type="text/javascript" src="{!! asset('travel/vendors/revolution/js/extensions/revolution.extension.slideanims.min.js') !!}"></script>
      <script type="text/javascript" src="{!! asset('travel/vendors/revolution/js/extensions/revolution.extension.actions.min.js') !!}"></script>
      <script type="text/javascript" src="{!! asset('travel/vendors/revolution/js/extensions/revolution.extension.layeranimation.min.js') !!}"></script>
      <script type="text/javascript" src="{!! asset('travel/vendors/revolution/js/extensions/revolution.extension.parallax.min.js') !!}"></script>
      <script type="text/javascript" src="{!! asset('travel/vendors/revolution/js/extensions/revolution.extension.video.min.js') !!}"></script>
      <script type="text/javascript" src="{!! asset('travel/vendors/revolution/js/extensions/revolution.extension.navigation.min.js') !!}"></script>
      <script type="text/javascript" src="{!! asset('travel/vendors/revolution/js/extensions/revolution.extension.kenburn.min.js') !!}"></script>
      <script src="{!! asset('travel/js/revolution.js') !!}"></script>

   </body>
</html>