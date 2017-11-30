<!DOCTYPE html>
<html dir="ltr" lang="{{ Lang::getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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

    <link rel="icon" href="favicon.png" type="image/png">
    <link rel="stylesheet" href="../../../../fonts.googleapis.com/css9841.css?family=Source+Sans+Pro:400,600,700">
    <link rel="stylesheet" href="{!! asset('uriankhai/css/font-awesome.min.css')!!}">
    <link rel="stylesheet" href="{!! asset('uriankhai/css/bootstrap.min.css')!!}">
    <link rel="stylesheet" href="{!! asset('uriankhai/css/fontawesome-stars-o.min.css')!!}">
    <link rel="stylesheet" href="{!! asset('uriankhai/css/style.css')!!}">
    <link rel="stylesheet" href="{!! asset('uriankhai/css/responsive-style.css')!!}">
    <link rel="stylesheet" href="{!! asset('uriankhai/css/colors/theme-color-1.css')!!}" id="changeColorScheme">
    <link rel="stylesheet" href="{!! asset('uriankhai/css/custom.css')!!}">
    <!--[if lt IE 9]> <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script> <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script><![endif]-->
</head>

{!! getcong('headcode') !!}

@yield("header")

<body>
    <div id="preloader">
        <div class="preloader bg--color-1--b" data-preloader="1">
            <div class="preloader--inner"></div>
        </div>
    </div>
    <div class="wrapper">

        @include("_particles.header")

        <!-- Header start  -->
        @yield("content")
       <!-- Footer -->
        @include("_particles.footer")

        @yield("footer")
        @include('.errors.swalerror')

    </div>
    <div id="stickySocial" class="sticky--right">
        <ul class="nav">
            <li>
                <a href="#"> <i class="fa fa-facebook"></i> <span>Follow Us On Facebook</span> </a>
            </li>
            <li>
                <a href="#"> <i class="fa fa-twitter"></i> <span>Follow Us On Twitter</span> </a>
            </li>
            <li>
                <a href="#"> <i class="fa fa-google-plus"></i> <span>Follow Us On Google Plus</span> </a>
            </li>
            <li>
                <a href="#"> <i class="fa fa-rss"></i> <span>Follow Us On RSS</span> </a>
            </li>
            <li>
                <a href="#"> <i class="fa fa-vimeo"></i> <span>Follow Us On Vimeo</span> </a>
            </li>
            <li>
                <a href="#"> <i class="fa fa-youtube-play"></i> <span>Follow Us On Youtube Play</span> </a>
            </li>
            <li>
                <a href="#"> <i class="fa fa-linkedin"></i> <span>Follow Us On LinkedIn</span> </a>
            </li>
        </ul>
    </div>
    <div id="backToTop"> <a href="#"><i class="fa fa-angle-double-up"></i></a> </div>
    <script src="../../../cdn-cgi/scripts/0e574bed/cloudflare-static/email-decode.min.js"></script>
    <script src="{!! asset('uriankhai/js/jquery-3.2.1.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/bootstrap.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/jquery.sticky.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/jquery.hoverIntent.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/jquery.marquee.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/jquery.validate.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/isotope.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/resizesensor.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/theia-sticky-sidebar.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/jquery.zoom.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/jquery.barrating.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/jquery.countdown.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/retina.min.js')!!}"></script>
    <script src="../../../../external.html?link=https://maps.googleapis.com/maps/api/js?key=AIzaSyBK9f7sXWmqQ1E-ufRXV3VpXOn_ifKsDuc"></script>
    <script src="{!! asset('uriankhai/js/color-switcher.min.js')!!}"></script>
    <script src="{!! asset('uriankhai/js/main.js')!!}"></script>
</body>

</html>