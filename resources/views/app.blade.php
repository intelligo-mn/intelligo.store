<!DOCTYPE html>
<html lang="{{ Lang::getLocale() }}">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('head_title', getcong('sitetitle'))</title>
    <meta name="description" content="@yield('head_description', getcong('sitemetadesc'))" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="@yield('head_title',  getcong('sitetitle'))" />
    <meta property="og:description" content="@yield('head_description', getcong('sitemetadesc'))" />
    <meta property="og:image" content="@yield('head_image', url('/assets/img/logo.png'))" />
    <meta property="og:url" content="@yield('head_url', url())" />

    <meta name="twitter:image" content="@yield('head_image', url('/assets/img/logo.png'))" />
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="@yield('head_url', url())">
    <meta name="twitter:title" content="@yield('head_title',  getcong('sitetitle'))">
    <meta name="twitter:description" content="@yield('head_description', getcong('sitemetadesc'))">

    <link href='https://fonts.googleapis.com/css?family=Lato:400,500,500italic,600,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
    <link href="{{ url('/assets/img/favicon.png') }}" rel="shortcut icon" type="image/x-icon" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/css/plugins.css">
    <link rel="stylesheet" href="/assets/css/application.css">

    {!! getcong('headcode') !!}

    <style>


        body {
            background: {{  getcong('BodyBC') }}!important;}
        body.mode-boxed {
            background: {{  getcong('BodyBCBM') }}!important; }
        header {
            background: {{ getcong('NavbarBC') }}!important;
            border-top: 3px solid {{ getcong('NavbarTBLC') }}!important;}
        .header  a{
            color: {{ getcong('NavbarLC') }}!important;}
        .header a > i{
            color: {{ getcong('NavbarLC') }}!important;}

        .header .navmenu li.active >a,
        .header .navmenu li:hover >a{
             border-color: {{ getcong('NavbarTBLC') }}!important;
         }

        .header a:hover{
            color: {{ getcong('NavbarLHC') }}!important;}
        .header a:hover > i{
            color: {{ getcong('NavbarLHC') }}!important;}
        .header .create-links > a {
            background: {{ getcong('NavbarCBBC') }}!important;
            color: {{ getcong('NavbarCBFC') }}!important;
            border-color: {{ getcong('NavbarCBBC') }}!important;}
        .header .create-links > a i {
            color: {{ getcong('NavbarCBFC') }}!important;}
        .header .create-links > a:hover {
            background: {{ getcong('NavbarCBHBC') }}!important;
            color: {{ getcong('NavbarCBHFC') }}!important;}
        .header .create-links > a:hover i {
            color: {{ getcong('NavbarCBHFC') }}!important;}
        .list-count:before {
            background: {{ getcong('NavbarTBLC') }}!important;}
    </style>
    @yield("header")
</head>
<body class="{{ getcong('languagetype') }}  {{ getcong('LayoutType') }} {{ getcong('NavbarType') }} @if(!Request::is('/')) mode-default @endif @if(Request::is('create') or Request::segment(1)=='profile' or Request::segment(1)=='edit') mode-boxed @endif">
@include("_particles.header")

<div class="content-wrapper" id="container-wrapper">

    @foreach(\App\Widgets::where('type', 'HeaderBelow')->where('display', 'on')->get() as $widget)
        <div class="content">
            <div class="container" style="text-align: center;padding:20px 0">
                <center>
                 {!! $widget->text !!}
                </center>
            </div>
        </div>
    @endforeach

    @yield("content")

</div>
@include("_particles.footer")

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

<div id="fb-root"></div>
<script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/tr_TR/sdk.js#xfbml=1&version=v2.4&appId=1008152565882973";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

{!!  getcong('footercode')  !!}

</body>
</html>
<!-- Buzzy Media Script - All rights reserved by akbilisim. Website: www.akbilisim.com -->