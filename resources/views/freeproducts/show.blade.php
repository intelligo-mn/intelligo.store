@extends('layouts.master')
@section('title')@parent- {{ trans('globals.freeproducts') }} @stop
@section('page_class')freeproduct_view @stop

@section('css')
    @parent
@stop

@section('content')
    @parent

    @section('center_content')
    <div class="panel panel-default" ng-controller="FreeProductsView" ng-cloak>
        <div class="panel-heading">
            <h3 class="panel-title"><span class="glyphicon glyphicon-briefcase"></span> [[ freeproduct.description ]]</h3>
        </div>
        <div class="panel-body products-view">
            <div class="row">
                @include('partial.message')
                

                <div ng-hide="freeproduct">
                    <div class="alert alert-success">
                        <h7>{{ trans('freeproduct.loading_freeproduct') }}</h7>
                    </div>
                </div>
                {{-- Despliega el carousel solo cuando el producto tiene mas una imagen cargada --}}
                <div class="col-xs-12 col-sm-4 col-md-3 col-lg-4 ng-hide" ng-show="[[ products.length > 1 ]]">
                    <carousel interval="myInterval">
                        <slide ng-repeat="detail in products">
                            <img class="product-img" src="[[ detail.product.features.images[0] ]]" alt="[[ detail.product.name ]]">
                            <div class="carousel-caption">
                                <h6><a href="[[ toUrlShowProduct(detail.product.id) ]]">[[ detail.product.name ]]</a></h6>
                                <p>{{ trans('freeproduct.price_original') }}: [[ detail.product.price | thousandSuffix]] {{ trans('store.price') }}</p>
                            </div>
                        </slide>
                    </carousel>
                </div>
                {{-- Se muestra solamente cuando el producto tiene una sola imagen cargada --}}
                <div class="col-xs-12 col-sm-4 col-md-3 col-lg-4 ng-hide" ng-show="[[ products.length == 1 ]]">
                    <div ng-repeat="detail in products">
                        <img src="[[detail.product.features.images[0] ]]" alt="[[ detail.product.name ]]" style="width: 100%; heigth: 200px;" >
                        <div>
                            <h6><a href="[[ toUrlShowProduct(detail.product.id) ]]">[[ detail.product.name ]]</a></h6>
                            <p><strong>{{ trans('product.globals.price') }}: </strong>[[ detail.product.price ]] {{ trans('store.price') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-5 col-lg-4 hidden-xs">
                    <div><strong>{{ trans('freeproduct.start_date') }}: </strong>[[ freeproduct.start_date | date:'dd-MM-yyyy' ]]</div>
                    <div>
                        <strong>{{ trans('freeproduct.end_date') }}: </strong> [[ freeproduct.end_date | date:'dd-MM-yyyy' ]]
                        <span class="label label-success" ng-show="freeproduct.status==1">{{ trans('globals.active') }}</span>
                        <span class="label label-warning" ng-show="freeproduct.status==0">{{ trans('globals.inactive') }}</span>
                    </div>
                    <div><strong>{{ trans('freeproduct.participation_cost') }}: </strong> [[ freeproduct.participation_cost ]]</div>
                    <div><strong>{{ trans('freeproduct.draw_date') }}: </strong> [[ freeproduct.draw_date | date:'dd-MM-yyyy' ]]</div>
                </div>

                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 well">
                    @if (Auth::user())
                        @if (Auth::user()->id!=$freeproduct->user_id)
                            <div ng-if="datenow > freeproduct.start_date && datenow < freeproduct.end_date && !isparticipating && freeproduct.status">
                                {!! Form::open(array('url' => route('freeproducts.subscribe',[$freeproduct->id]), 'method' => 'put', 'class' => 'form-inline')) !!}
                                {!! Form::submit(trans('freeproduct.participate'),['class'=>'btn btn-primary btn-lg']) !!}
                                {!! Form::close() !!}
                            </div>
                            <div ng-show="datenow < freeproduct.start_date">
                                <h6>{{ trans('freeproduct.coming_soon') }}</h6>
                            </div>
                            <div ng-show="isparticipating">
                                <h6>{{ trans('freeproduct.you_are_participating') }}</h6>
                            </div>
                            <div ng-show="!freeproduct.status">
                                <h6>{{ trans('freeproduct.freeproduct_not_activated') }}</h6>
                            </div>
                        @else
                            <a href="#" type="button" class="btn btn-success">{{ trans('freeproduct.promote') }}</a>
                        @endif
                    @else
                        <a href="/login/" type="button" class="btn btn-success">{{ trans('user.login') }}</a>
                    @endif
                </div>

                {{-- Descripcion del producto --}}
                <div class="col-xs-12 visible-xs-block">
                    <div class="btn-group btn-group-justified" role="group">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-primary btn-lg" btn-checkbox ng-model="checkButtonDescription" ng-click="isCollapsedDescription = !isCollapsedDescription" btn-checkbox-true="1" btn-checkbox-false="0">{{ trans('freeproduct.conditions') }}</button>
                        </div>
                    </div>
                    <div collapse="isCollapsedDescription">
                        <div class="well well-xs">
                            <div class="hidden-xs"><strong>[[ freeproduct.description ]]</strong></div>
                            <div><strong>{{ trans('freeproduct.start_date') }}: </strong>[[ freeproduct.start_date | date:'dd-MM-yyyy' ]]</div>
                            <div>
                                <strong>{{ trans('freeproduct.end_date') }}: </strong> [[ freeproduct.end_date | date:'dd-MM-yyyy' ]]
                                <span class="label label-success" ng-show="freeproduct.status==1">{{ trans('globals.active') }}</span>
                                <span class="label label-warning" ng-show="freeproduct.status==0">{{ trans('globals.inactive') }}</span>
                            </div>
                            <div><strong>{{ trans('freeproduct.participation_cost') }}: </strong> [[ freeproduct.participation_cost ]]</div>
                            <div><strong>{{ trans('freeproduct.draw_date') }}: </strong> [[ freeproduct.draw_date | date:'dd-MM-yyyy' ]]</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div ng-non-bindable>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title"><span class="glyphicon glyphicon-briefcase"></span> Otros productos</h3>
        </div>
        <div class="panel-body carousel-nonangular">
            <div class="col-xs-12">
                <div class="carousel slide" data-ride="carousel" data-type="multi" data-interval="3000" id="myCarousel">
                  <div class="carousel-inner">
                    <div class="item active">
                      <div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="http://placehold.it/500/e499e4/fff&amp;text=1" class="img-responsive"></a></div>
                    </div>
                    <div class="item">
                      <div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="http://placehold.it/500/e477e4/fff&amp;text=2" class="img-responsive"></a></div>
                    </div>
                    <div class="item">
                      <div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="http://placehold.it/500/eeeeee&amp;text=3" class="img-responsive"></a></div>
                    </div>
                    <div class="item">
                      <div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="http://placehold.it/500/f4f4f4&amp;text=4" class="img-responsive"></a></div>
                    </div>
                    <div class="item">
                      <div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="http://placehold.it/500/f566f5/333&amp;text=5" class="img-responsive"></a></div>
                    </div>
                    <div class="item">
                      <div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="http://placehold.it/500/f477f4/fff&amp;text=6" class="img-responsive"></a></div>
                    </div>
                    <div class="item">
                      <div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="http://placehold.it/500/eeeeee&amp;text=7" class="img-responsive"></a></div>
                    </div>
                    <div class="item">
                      <div class="col-md-3 col-sm-6 col-xs-12"><a href="#"><img src="http://placehold.it/500/fcfcfc/333&amp;text=8" class="img-responsive"></a></div>
                    </div>
                  </div>
                  <a class="left carousel-control" href="#myCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
                  <a class="right carousel-control" href="#myCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
                </div>
            </div>
        </div>
    </div>
    </div>
    @endsection
@stop

@section('scripts')
    @parent
    <script>
        (function(app){
            app.controller('FreeProductsView', ['$scope','$http', function($scope, $http){
                $scope.myInterval = 5000;
                $scope.isCollapsedDescription = true;
                $scope.checkButtonDescription = 1;
                $scope.freeproduct=({!! $freeproduct->toJson() !!});
                $scope.details = [];
                angular.forEach($scope.freeproduct.orders, function(fp) {
                    $scope.details.push(fp.details);
                });
                $scope.products = $scope.details[0];
                $scope.isparticipating=({!! $isParticipating !!});
                $scope.datenow=new Date().toISOString();
                $scope.urlShow = '{{ action('ProductsController@show', ['productId']) }}';

                $scope.toUrlShowProduct = function($productId) {
                    $scope.urlShow = $scope.urlShow.replace('productId',$productId);
                    return $scope.urlShow;
                };

            }]);
            app.config(
                ['$animateProvider',
                    function ($animateProvider) {
                        $animateProvider.classNameFilter(/carousel/);
            }]);
        })(angular.module("Bella"));

        //Carousel Free Products
        $('.carousel[data-type="multi"] .item').each(function(){
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i=0;i<2;i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });
    </script>
@stop