<?php
$DB_PLUGIN_NEWS = getcong('p-modunews');
$DB_PLUGIN_LISTS = getcong('p-modulists');
$DB_PLUGIN_POLLS =getcong('p-modupolls');
$DB_PLUGIN_VIDEOS = getcong('p-moduvideos');
$DB_PLUGIN_QUIZS= getcong('p-moduquizzes');
$DB_PLUGIN_QUIZS=\App::getLocale();
?>
@extends("app")
@section('content')
    <div class="content" >
        <div class="container" style="padding:150px 0 350px 0;text-align: center">
            <img src="{{ asset('/assets/img/404.png') }}">
            <div class="clear"></div>
            <a href="/"  style="margin-top:50px" class="button button-big button-orange">Go Back Home</a>
        </div>
    </div>
@endsection
