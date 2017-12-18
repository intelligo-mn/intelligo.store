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

    <link rel="stylesheet" href="{!! asset('css/bootstrap.min.css')!!}" media="all" />
    <link rel="stylesheet" href="{!! asset('css/font-awesome.min.css')!!}" media="all" />
    <link rel="stylesheet" href="{!! asset('css/superfish.css')!!}" media="all" />
    <link rel="stylesheet" href="{!! asset('css/owl.carousel.css')!!}" media="all" />
    <link rel="stylesheet" href="{!! asset('css/owl.theme.css')!!}" media="all" />
    <link rel="stylesheet" href="{!! asset('css/jquery.navgoco.css')!!}"/>
    <link rel="stylesheet" href="{!! asset('css/flexslider.css')!!}"/>
    <link rel="stylesheet" href="{!! asset('css/color-options.css')!!}" media="all" />
    <link rel="stylesheet" href="{!! asset('style.css')!!}">
    <link rel="stylesheet" href="{!! asset('demo.css')!!}">
    <link rel="stylesheet" href="{!! asset('css/responsive.css')!!}"/>
    <script src="js/modernizr.custom.js"></script>


    <!-- Color Switch -->
    <link rel="stylesheet" href="css/skin/red.css" type="text/css" id="colors" />

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="img/favicon.html">
    <link rel="apple-touch-icon" href="img/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png">

    <!-- Google Fonts -->
    <link href='https://fonts.googleapis.com/cssff1c.css?family=Raleway:400,300,700,600' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css9cba.css?family=Lato:400,300italic,300,400italic,700,700italic' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="/assets/css/plugins.css">
    <link rel="stylesheet" href="/assets/css/application.css">
    <link rel="stylesheet" href="/assets/css/test.css">

    <style type="text/css">
        body {
            font-family: 'Roboto Condensed', sans-serif;
        }
    </style>

    {!! getcong('headcode') !!}

    @yield("header")

</head>
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

<div id="fb-root"></div>
<script src="/assets/js/plugins.js"></script>
<script src="/assets/js/app.min.js"></script>

<script src="{!! asset('js/jquery-1.11.1.min.html')!!}"></script>
<script src="{!! asset('js/bootstrap.min.html')!!}"></script>
<script src="{!! asset('js/colorswitch.js')!!}"></script>
<script src="{!! asset('js/custom.html')!!}" charset="utf-8"></script>

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