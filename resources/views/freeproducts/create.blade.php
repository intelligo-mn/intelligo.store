@extends('layouts.master')
@section('title')@parent - {{ trans('globals.freeproducts') }} @stop
@section('page_class')freeproducts-create @stop
{{-- Content --}}
@section('content')
   @parent

   @section('center_content')
   <div class="row" ng-controller="FreeProductCreate">
    <div class="tabbable">
        <ul class="nav nav-tabs hidden-xs">
            <li class="active"><a href="#pane1" data-toggle="tab">{{ trans('freeproduct.information_detail') }}</a></li>
            <li><a href="#pane2" data-toggle="tab">{{ trans('freeproduct.products_included') }}</a></li>
        </ul>
        <div class="visible-xs-block">
            <a href="#pane1" data-toggle="tab">{{ trans('freeproduct.information_detail') }}</a> -
            <a href="#pane2" data-toggle="tab">{{ trans('freeproduct.products_included') }}</a>
        </div>
        <div class="tab-content">
            <div id="pane1" class="tab-pane fade in active">
                <div class="panel">
                    @include('partial.message')
                    {!! Form::open(['url'=>'freeproducts', 'class'=>'form-horizontal', 'role'=>'form']) !!}
                        @include('freeproducts.partial.inputs')
                        <div class="panel-btn">{!! Form::submit(trans('globals.save'),['class'=>'btn btn-primary btn-lg']) !!}</div>
                    {!! Form::close() !!}
                 </div>
            </div>
            <div id="pane2" class="tab-pane fade">
                <div class="panel">
                    <div class="panel-body">
                        <div ng-repeat="detail in order" ng-show="order" class="text-small ng-hide">
                            <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                                <img ng-src="[[ detail.product.features.images[0] ]]" alt="[[ detail.product.name ]]" style="width:100%; height:180px;">
                            </div>
                            <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10">
                                <div class="=row">
                                    <div>
                                        [[ detail.product.name ]]
                                    </div>
                                </div>
                                <div class="=row">
                                    <div>[[ detail.product.price ]] {{ trans('store.price') }}</div>
                                </div>
                                <div class="=row">
                                    <div>[[ detail.quantity ]] {{ trans('store.items') }}</div>
                                </div>
                                <div class="=row">
                                    <div><a ng-controller="ModalCtrl" ng-init="data={'data':[[detail.product.id]]}" ng-click="modalOpen({templateUrl:'/modalDetailsProductCart',controller:'getDetailsProductInCart',resolve:'data'})">{{ trans('product.globals.view_details') }}</a></div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><hr/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
   @stop

@endsection
{{-- Footer --}}
@section('footer')
   @parent
@stop
{{-- Angular --}}
@section('before.angular') @stop
{{-- Javascript --}}
@section('scripts')
@parent
  <script>
    (function(app){
        app.controller('FreeProductCreate', ['$scope','$http', function($scope, $http){
            $scope.order=({!! $jsonOrder !!});
        }]);
    })(angular.module("AntVel"));
  </script>
@stop