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
    <meta property="og:image" content="@yield('head_image', url('/assets/img/logo.png'))" />
    <meta property="og:url" content="@yield('head_url', url())" />

    <meta name="twitter:image" content="@yield('head_image', url('/assets/img/logo.png'))" />
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="@yield('head_url', url())">
    <meta name="twitter:title" content="@yield('head_title',  getcong('sitetitle'))">
    <meta name="twitter:description" content="@yield('head_description', getcong('sitemetadesc'))">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    <link href="{{ url('/assets/img/favicon.png') }}" rel="shortcut icon" type="image/x-icon" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/css/plugins.css">
    <link rel="stylesheet" href="/assets/css/application.css">


    <style type="text/css">
        body {
            font-family: 'Open Sans Condensed', sans-serif;
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