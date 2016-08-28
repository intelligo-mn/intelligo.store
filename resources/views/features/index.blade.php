@extends('layouts.wpanel')
@section('title')@parent - {{ trans('product.globals.features') }} @stop
@section('panel_left_content')
@parent
@stop
@section('center_content')
<div class="container-fluid">
    <div class="row">
        @include('partial.message')
        <div class="panel panel-default">
            <div class="panel-heading" ng-init="search=''">
                <h6><span class="glyphicon glyphicon-th-list"></span> {{ trans('product.globals.features') }}
                <a href="{{ route('wpanel.productsdetails.create') }}" class="btn btn-default btn-md pull-right">{{ trans('features.new_feature') }}</a>
                </h6>
            </div>
            <div class="panel-body" style="min-height:500px;">
            <input type="search" ng-model="search" class="form-control" placeholder="{{ trans('globals.search_for').' '.trans('product.inputs_view.name') }}"/>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-info hidden-xs">
                        <div class="row">
                            <div class="col-md-1">#ID</div>
                            <div class="col-md-4">{{ trans('product.inputs_view.name') }}</div>
                            <div class="col-md-2">{{ trans('globals.status') }}</div>
                            <div class="col-md-2">{{ trans('features.type_input') }}</div>
                            <div class="col-md-2">{{ trans('features.type_product') }}</div>
                            <div class="col-md-1">{{ trans('globals.action') }}</div>
                        </div>
                    </li>
                    @foreach($features as $row)
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-md-1">{{ $row['id'] }}</div>
                            <div class="col-md-4"><a href="{{ route('wpanel.productsdetails.show',$row['id']) }}">{{ $row['name'] }}</a></div>
                            <div class="col-md-2">{{ $row['status'] }}</div>
                            <div class="col-md-2">{{ $row['input_type'] }}</div>
                            <div class="col-md-2">{{ $row['type_products'] }}</div>
                            <div class="col-md-1"><a href="{{ route('wpanel.productsdetails.edit',$row['id']) }}">{{ trans('globals.edit') }}</a></div>
                        </div>
                    </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</div>
@stop
@section('script')
@parent
@stop