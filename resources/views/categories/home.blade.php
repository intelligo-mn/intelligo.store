@extends('layouts.wpanel')
@section('title')@parent - {{ trans('product.globals.categories') }} @stop
@section('panel_left_content')
@parent
@stop
@section('center_content')
<div class="container-fluid">
    <div class="row">
        <div class="panel panel-default">
            <div class="panel-heading" ng-init="search=''">
                <h6><span class="glyphicon glyphicon-tasks"></span> {{ trans('product.globals.categories') }}
                <a href="{{ route('wpanel.category.create') }}" class="btn btn-default btn-md pull-right">{{ trans('store.new_category') }}</a>
                </h6>
            </div>
            <div class="panel-body" style="min-height:500px;">
                <input type="search" ng-model="search" class="form-control" placeholder="{{ trans('globals.search_for') }} {{ trans('product.inputs_view.name') }}"/>
                @include('categories.list_childs')
            </div>
        </div>
    </div>
</div>
@stop
@section('script')
@parent
@stop