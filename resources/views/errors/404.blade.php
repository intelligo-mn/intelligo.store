@extends('layouts.notfound')

@section('title')@parent - 404 {{ trans('globals.404_error.title') }}  @stop

@section('classPanel') error-404 @stop

@section('content')

	<h1> <span class="glyphicon glyphicon-alert"></span> {{ $main_company['name'] }} 404!</h1>
	
	<p class="lead">
		
		{{ trans('globals.404_error.message_01') }}
		
		<a href="javascript.void(0)" onclick="window.history.back();">{{ trans('globals.404_error.link_01') }}</a>
		
		{{ trans('globals.404_error.message_02') }} <a href="/home">{{ trans('globals.404_error.link_02') }}</a>
	</p>

@stop

@section('btn-back')
	<span class="glyphicon glyphicon-home"></span> {{ trans('globals.404_error.link_02') }}
@stop