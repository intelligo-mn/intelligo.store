<!doctype html>
<html class="no-js" lang="{{ Lang::getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
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

    <link rel="shortcut icon" type="image/x-icon" href="images/fav.png">
    <!-- Place favicon.ico in the root directory -->
    <!-- all css here -->
    <!-- bootstrap v3.3.6 css -->
    <link rel="stylesheet" href="{!! asset('cooltheme/css/bootstrap.min.css') !!}">
    <!-- font-awesome css -->
    <link rel="stylesheet" href="{!! asset('cooltheme/css/font-awesome.min.css') !!}">
    <!-- animate css -->
    <link rel="stylesheet" href="{!! asset('cooltheme/css/animate.css') !!}">
    <!-- hover-min css -->
    <link rel="stylesheet" href="{!! asset('cooltheme/css/hover-min.css') !!}">
      <!-- magnific-popup css -->
    <link rel="stylesheet" href="{!! asset('cooltheme/css/magnific-popup.css') !!}">
    <!-- meanmenu css -->
    <link rel="stylesheet" href="{!! asset('cooltheme/css/meanmenu.min.css') !!}">
    <!-- owl.carousel css -->
    <link rel="stylesheet" href="{!! asset('cooltheme/css/owl.carousel.css') !!}">
    <!-- lightbox css -->
    <link href="{!! asset('cooltheme/css/lightbox.min.css') !!}" rel="stylesheet">
    <!-- nivo slider CSS -->
    <link rel="stylesheet" href="{!! asset('cooltheme/inc/custom-slider/css/nivo-slider.css') !!}" type="text/css" />
    <link rel="stylesheet" href="{!! asset('cooltheme/inc/custom-slider/css/preview.css') !!}" type="text/css" media="screen" />
    <!-- style css -->
    <link rel="stylesheet" href="{!! asset('cooltheme/css/style.css') !!}">
    <!-- responsive css -->
    <link rel="stylesheet" href="{!! asset('cooltheme/css/responsive.css') !!}">
    <!-- modernizr js -->
    <script src="{!! asset('cooltheme/js/modernizr-2.8.3.min.js') !!}"></script>

    {!! getcong('headcode') !!}

    @yield("header")
</head>

<body class="home">
    <!--Preloader area Start here-->
    <div class="preloader">
         <div class="sk-cube-grid">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
          </div>
    </div>
    <!--Preloader area end here-->

<?php $DB_USER_LANG = isset($DB_USER_LANG) ? $DB_USER_LANG : '' ?>

@include("_particles.header")

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

    @include("_particles.footer")

    <!-- Start scrollUp  -->
    <div id="return-to-top">
        <span>Top</span>
    </div>
    <!-- End scrollUp  -->
    
    <!-- Footer Area Section End Here -->
    
    <!-- all js here -->
    <script src="{!! asset('cooltheme/js/jquery.min.js') !!}"></script>
    <!-- jquery latest version -->
    <script src="{!! asset('cooltheme/js/jquery.min.js') !!}"></script>
     <!-- jquery-ui js -->
    <script src="{!! asset('cooltheme/js/jquery-ui.min.js') !!}"></script>
    <!-- bootstrap js -->
    <script src="{!! asset('cooltheme/js/bootstrap.min.js') !!}"></script>
    <!-- meanmenu js -->
    <script src="{!! asset('cooltheme/js/jquery.meanmenu.js') !!}"></script>
    <!-- wow js -->
    <script src="{!! asset('cooltheme/js/wow.min.js') !!}"></script>
    <!-- owl.carousel js -->
    <script src="{!! asset('cooltheme/js/owl.carousel.min.js') !!}"></script>
    <!-- magnific-popup js -->
    <script src="{!! asset('cooltheme/js/jquery.magnific-popup.js') !!}"></script>
    
    <!-- jquery.counterup js -->
    <script src="{!! asset('cooltheme/js/jquery.counterup.min.js') !!}"></script>
    <script src="{!! asset('cooltheme/js/waypoints.min.js') !!}"></script>
    <!-- jquery light box -->
    <script src="{!! asset('cooltheme/js/lightbox.min.js') !!}"></script>
    <!-- Nivo slider js -->
    <script src="{!! asset('cooltheme/inc/custom-slider/js/jquery.nivo.slider.js') !!}" type="text/javascript"></script>
    <script src="{!! asset('cooltheme/inc/custom-slider/home.js') !!}" type="text/javascript"></script>
    <!-- main js -->
    <script src="{!! asset('cooltheme/js/main.js') !!}"></script>

    @yield("footer")
    @include('.errors.swalerror')

    <div id="auth-modal" class="modal auth-modal"></div>

    <div class="hide">
        <input name="_requesttoken" id="requesttoken" type="hidden" value="{{ csrf_token() }}" />
    </div>

    {!!  getcong('footercode')  !!}

</body>

</html>
