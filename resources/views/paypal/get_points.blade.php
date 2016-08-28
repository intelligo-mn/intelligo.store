@extends('layouts.master')
@section('title')@parent - {{ trans('store.paypal.antvel_points_bundle') }} @stop
@section('page_class')products_view @stop

@section('css')
    @parent
@stop

@section('content')
    @parent
    @section('center_content')

    <div class="panel panel-default">
        <div class="panel-body cart-resume">
            <div class="row">
                @include('partial.message')
                <!-- Points to Buy (product like points) -->
                <div class="col-xs-12 visible-xs-block">
                    <strong>{{ trans('store.paypal.antvel_points_bundle') }}</strong>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3" >
                    <img ng-src="/img/paypal_points.jpg" alt="[[ product.name ]]" style="width: 100%; heigth: 200px;" >
                </div>
                <div class="col-xs-12 col-sm-4 col-md-5 col-lg-5">
                    <div class="text-small hidden-xs"><strong><h6>{{ trans('store.paypal.antvel_points_bundle') }}</h6></strong></div>
                    <div class="text-small"><strong>{{ trans('product.globals.price') }}: </strong>1 USD</div>
                    <div class="text-small"><strong>{{ trans('product.globals.content') }}: </strong>{{ env('PAYPAL_POINTS_PER_DOLLAR','1000') }} {{ trans('store.price') }}</div>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 well">
                    {!! Form::open(array('url' => route('paypal.post_payment'), 'method' => 'post')) !!}
                    {{ trans('store.quantity') }}: {!! Form::selectRange('quantity', 1, 50, 1, ['class' => 'form-control input-lg']) !!}
                    <hr/>
                    {!! Form::submit(trans('store.buy_points'), array('class' => 'btn btn-default btn-md')) !!}
                </div>
            </div>
            <div class="row text-center">
                <a class="btn btn-primary" href="{{ route('products') }}">{{trans('store.continue_shopping')}}</a>
            </div>
        </div>
    </div>

    @endsection
@stop
