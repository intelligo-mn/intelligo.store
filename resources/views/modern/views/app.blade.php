<!DOCTYPE html>
<html lang="{{ Lang::getLocale() }}"  {{ config('app.language.'.$DB_USER_LANG.'.rtl') == true ? 'dir=rtl' : '' }}>
<head>
    <title>@yield('head_title', getenvcong('sitetitle'))</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="@yield('head_description', getenvcong('sitemetadesc'))" />
    <meta property="fb:app_id" content="{{  getenvcong('facebookapp') }}" />
    <meta property="og:type" content="@yield('og_type',  'website')" />
    <meta property="og:site_name" content="{{  str_replace(' ', '', getenvcong('sitename')) }}">
    <meta property="og:title" content="@yield('head_title',  getenvcong('sitetitle'))">
    <meta property="og:description" content="@yield('head_description', getenvcong('sitemetadesc'))">
    <meta property="og:url" content="@yield('head_url', url())">
    <meta property="og:locale" content="{{  getenvcong('sitelanguage') }}">
    <meta property="og:image" content="@yield('head_image', url('/assets/img/logo.png'))" />
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="{{ str_replace(' ', '', getenvcong('sitename')) }}">
    <meta name="twitter:title" content="@yield('head_title',  getenvcong('sitetitle'))">
    <meta name="twitter:url" content="@yield('head_url', url())">
    <meta name="twitter:description" content="@yield('head_description', getenvcong('sitemetadesc'))">
    <meta name="twitter:image" content="@yield('head_image', url('/assets/img/logo.png'))" />
    <link rel="shortcut icon" href="{{ url('/assets/img/favicon.png') }}" />

    <link href='https://fonts.googleapis.com/css?family={{  getenvcong('googlefont') }}' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="{{ Theme::asset('/css/plugins.css', null, false) }}">
    <?php
    $googlefont_prefix =  config('app.language.'.$DB_USER_LANG.'.rtl') == true ? '-rtl' : '';
    ?>
    <link type="text/css" rel="stylesheet" href="{{ Theme::asset('/css/application'. $googlefont_prefix .'.css', null, false) }}">

    <style type="text/css">
        body {
            font-family: {!!    getenvcong('T_1_sitefontfamily') !!};
            background: {{  getenvcong('T_1_BodyBC') }}!important;}
        .header {
            background: {{ getenvcong('T_1_NavbarBC') }}!important;}
        .header__appbar {
            border-top: 3px solid {{ getenvcong('T_1_NavbarTBLC') }}!important;}
        .header__appbar--left__menu__list__item > a{
            color: {{ getenvcong('T_1_NavbarLC') }}!important;}
        .header__appbar--left__menu__list__item > a > i{
            color: {{ getenvcong('T_1_NavbarLC') }}!important;}
        .header__appbar--left__menu__list__item > a:hover{
            color: {{ getenvcong('T_1_NavbarLHC') }}!important;}
        .header__appbar--left__menu__list__item > a:hover > i{
            color: {{ getenvcong('T_1_NavbarLHC') }}!important;}
        .button.button-create {
            background: {{ getenvcong('T_1_NavbarCBBC') }}!important;
            color: {{ getenvcong('T_1_NavbarCBFC') }}!important;
            border-color: {{ getenvcong('T_1_NavbarCBBC') }}!important;}
        .button.button-create i {
            color: {{ getenvcong('T_1_NavbarCBFC') }}!important;}
        .button.button-create:hover {
            background: {{ getenvcong('T_1_NavbarCBHBC') }}!important;
            color: {{ getenvcong('T_1_NavbarCBHFC') }}!important;}
        .button.button-create:hover i {
            color: {{ getenvcong('T_1_NavbarCBHFC') }}!important;}
    </style>

    {!! rawurldecode(getenvcong('headcode')) !!}

    @yield("header")

</head>
<body class="@yield('modedefault')">
<div id="fb-root"></div>
@include("_particles.header")

@yield("content")

@include("_particles.footer")

<script src="{{ Theme::asset('js/plugins.js', null, false) }}"></script>
<script src="{{ Theme::asset('js/app.min.js', null, false) }}"></script>
<script>
    $( document ).ready(function() {
        App.init();
    });
</script>
@if(getenvcong('facebookapp')>"")
<script>
    $(function(){

        //facebook
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '{{ getenvcong('facebookapp') }}',
                xfbml      : true,
                version    : 'v2.5'
            });
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/{{  getenvcong('sitelanguage') > "" ? getenvcong('sitelanguage') : 'en_US' }}/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    });
</script>
@endif
@yield("footer")
@include('.errors.swalerror')

<div id="auth-modal" class="modal auth-modal"></div>

<div class="hide">
    <input name="_requesttoken" id="requesttoken" type="hidden" value="{{ csrf_token() }}" />
</div>

{!!  rawurldecode(getenvcong('footercode'))  !!}

</body>
</html>


