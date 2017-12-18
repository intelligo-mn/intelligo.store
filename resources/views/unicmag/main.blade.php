<!DOCTYPE html>
<html lang="{{ Lang::getLocale() }}">
<head>
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
    
    <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    <link href="{{ url('/assets/img/favicon.png') }}" rel="shortcut icon" type="image/x-icon" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="{!! asset('unicmag/css/bootstrap.min.css')!!}" media="all" />
    <link rel="stylesheet" href="{!! asset('unicmag/css/font-awesome.min.css')!!}" media="all" />
    <link rel="stylesheet" href="{!! asset('unicmag/css/superfish.css')!!}" media="all" />
    <link rel="stylesheet" href="{!! asset('unicmag/css/owl.carousel.css')!!}" media="all" />
    <link rel="stylesheet" href="{!! asset('unicmag/css/owl.theme.css')!!}" media="all" />
    <link rel="stylesheet" href="{!! asset('unicmag/css/jquery.navgoco.css')!!}"/>
    <link rel="stylesheet" href="{!! asset('unicmag/css/flexslider.css')!!}"/>
    <link rel="stylesheet" href="{!! asset('unicmag/css/color-options.css')!!}" media="all" />
    <link rel="stylesheet" href="{!! asset('unicmag/style.css')!!}">
    <link rel="stylesheet" href="{!! asset('unicmag/demo.css')!!}">
    <link rel="stylesheet" href="{!! asset('unicmag/css/responsive.css')!!}"/>
    <script src="{!! asset('unicmag/js/modernizr.custom.js')!!}"></script>
    <link rel="stylesheet" href="{!! asset('unicmag/css/skin/red.css')!!}" type="text/css" id="colors" />
    <link href='https://fonts.googleapis.com/cssff1c.css?family=Raleway:400,300,700,600' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css9cba.css?family=Lato:400,300italic,300,400italic,700,700italic' rel='stylesheet' type='text/css'>

    {!! getcong('headcode') !!}

    @yield("header")

</head>
<?php $DB_USER_LANG = isset($DB_USER_LANG) ? $DB_USER_LANG : '' ?>

<body class="punica-home-1">

<div id="theme-option">
    <div class="theme-opt-wrapper">
        <p><em>You can use Unlimited Colors</em></p>
        <ul class="choose-color">
            <li><a href="#" class="color red">&nbsp;</a></li>
            <li><a href="#" class="color blue">&nbsp;</a></li>
            <li><a href="#" class="color cyan">&nbsp;</a></li>
            <li><a href="#" class="color pink">&nbsp;</a></li>
            <li><a href="#" class="color green">&nbsp;</a></li>            
            <li><a href="#" class="color oran">&nbsp;</a></li>
            <li><a href="#" class="color purple">&nbsp;</a></li>
        </ul>
        <div class="text-center"><a href="#" class="reset" onClick="return punica_theme_option_reset_CLICK();">Reset</a></div>
    </div><!--end:theme-opt-wrapper-->
    <a href="#" class="fa fa-cog open-close-button"> </a><!--open-close-button-->
</div><!--end:theme-option -->

@include("_particles.header")


@include("_particles.footer")

<div id="fb-root"></div>

<script src="{!! asset('unicmag/js/jquery-1.11.1.min.html')!!}"></script>
<script src="{!! asset('unicmag/js/bootstrap.min.html')!!}"></script>
<script src="{!! asset('unicmag/js/colorswitch.js')!!}"></script>
<script src="{!! asset('unicmag/js/custom.html')!!}" charset="utf-8"></script>

<script>
    $( document ).ready(function() {
        App.init();
    });
</script>
@yield("footer")
@include('.errors.swalerror')

<div id="auth-modal" class="modal auth-modal"></div>

<div class="hide">
    <input name="_requesttoken" id="requesttoken" type="hidden" value="{{ csrf_token() }}" />
</div>

{!!  getcong('footercode')  !!}

</body>
</html>