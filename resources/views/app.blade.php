<!DOCTYPE html>
<html lang="{{ Lang::getLocale() }}">

<head>
<title>@yield('head_title', getcong('sitetitle'))</title>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
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

<link rel="icon" type="image/png" sizes="16x16" href="travel/img/favicon-16x16.png">

<link media="all" rel="stylesheet" href="travel/vendors/font-awesome/css/font-awesome.css">

<link media="all" rel="stylesheet" href="travel/vendors/material-design-icons/material-icons.css">

<link rel="stylesheet" type="text/css" href="travel/css/fonts/icomoon/icomoon.css">

<link media="all" rel="stylesheet" href="travel/vendors/animate/animate.css">

<link media="all" rel="stylesheet" href="travel/css/bootstrap.css">

<link media="all" rel="stylesheet" href="travel/vendors/owl-carousel/owl.carousel.css">
<link media="all" rel="stylesheet" href="travel/vendors/owl-carousel/owl.theme.css">

<link media="all" rel="stylesheet" href="travel/css/main.css">

<link rel="stylesheet" type="text/css" href="travel/vendors/revolution/css/settings.css">

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