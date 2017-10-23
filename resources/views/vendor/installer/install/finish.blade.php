@extends('installer::layouts.master')

@section('container')
    <div class="panel panel-success">
        <div class="panel-heading">
            <h3 class="panel-title">
                <i class="glyphicon glyphicon-home"></i>
                @lang('installer::installer.final.title')
            </h3>
        </div>
        <div class="panel-body">
			@if (Session::has('message'))
            <div class="alert alert-success">
                {{ Session::get('message') }}

            </div>
                <a class="btn btn-success" href="/">
                    {{ trans('messages.final.exit') }}
                </a>
            @else
                <a class="btn btn-success" href="/">
                    {{ trans('messages.final.exit') }}
                </a>
            @endif


        </div>
    </div>
@stop