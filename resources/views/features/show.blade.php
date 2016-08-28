@extends('layouts.wpanel')
@section('title')@parent - {{ trans('product.globals.features') }} @stop
@section('panel_left_content')
    @parent
@stop
@section('center_content')
    <div class="row">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="panel panel-default">
                    <div class="panel-heading" ng-init="search=''">
                        <h3>
                            <a href="wpanel/features">{{ trans('product.globals.features') }}</a>
                            <a href="{{ route('wpanel.productsdetails.create') }}" class="btn btn-default btn-md pull-right visible-lg-inline">{{ trans('features.new_feature') }}</a>
                            <a href="{{ route('wpanel.productsdetails.create') }}" class="btn btn-default btn-md visible-xs-block">{{ trans('features.new_feature') }}</a>
                        </h3>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-md-6">{{ trans('product.inputs_view.name') }}</div>
                                <div class="col-md-3">{{ $feature['name'] }}</div>
                                <div class="col-md-3"><a href="{{ route('wpanel.productsdetails.edit',$feature['id']) }}" class="btn btn-default btn-md pull-right">{{ trans('globals.edit') }}</a></div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-md-6">{{ trans('globals.status') }}</div>
                                <div class="col-md-6">{{ $feature['status'] }}</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-md-6">{{ trans('features.type_input') }}</div>
                                <div class="col-md-6">{{ $feature['input_type'] }}</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-md-6">{{ trans('features.type_product') }}</div>
                                <div class="col-md-6">{{ $feature['type_products'] }}</div>
                            </div>
                        </li>
                        <li class="list-group-item list-group-item-info hidden-xs">
                            {{ trans('features.view_product_form') }}
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <form class="form-horizontal">
                                    @include('features.makeInputsToDocumentsPicturesVideos',['features'=>[$feature],'force'=>true])
                                    @include('features.makeInputs',['features'=>[$feature],'force'=>true])
                                </form>
                            </div>
                        <li class="list-group-item list-group-item-info hidden-xs">
                            {{ trans('features.view_product_detail') }}
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                @include('features.makeToShow',['globalFeatures'=>[$feature],'force'=>true])
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

@stop
@section('scripts')
    @parent
    {!! Html::script('/js/vendor/file-upload/angular-file-upload-shim.min.js') !!}
    {!! Html::script('/js/vendor/file-upload/angular-file-upload.min.js') !!}

    <script>
        (function(app){
            app.controller('upload', ['$scope', '$upload', function ($scope, $upload) {
                $scope.$watch('files', function () {
                    $scope.upload($scope.files);
                });
                $scope.upload = function (files) {
                    if (files && files.length) {
                        alert('This option is disabled');
                    }
                };
            }]);
        })(angular.module("AntVel"))
    </script>
@stop
@section('before.angular') ngModules.push('angularFileUpload'); @stop