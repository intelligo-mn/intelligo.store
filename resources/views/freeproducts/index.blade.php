@extends('layouts.master')
@section('title')@parent- {{ trans('globals.freeproducts') }} @stop
@section('page_class')products_view @stop
@section('content')
    @parent
    @if (isset($panel['left']))
        @section('panel_left_content')
            @include('user.partial.menu_dashboard')
        @stop
    @endif
    @section('center_content')
        <div class="panel panel-default" ng-controller="StoreFreeProducts" ng-cloak>
            <div class="panel-heading clearfix">
                <h4 class="panel-title pull-left"><span class="glyphicon glyphicon-star"></span> {{ trans('globals.freeproducts') }}</h4>
            </div>
            <div class="panel-body products-view">
                <!-- Filters -->
                <div class="navbar navbar-default" role="navigation">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse.s2">
                            <span class="sr-only">{{ trans('globals.filter') }}</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <span class="navbar-brand">{{ trans('globals.filter') }}</span>
                    </div>
                    <div class="navbar-collapse collapse sidebar-navbar-collapse s2">
                        <ul class="nav navbar-nav list-group">
                            <li class="list-group-item{{ !$filter?' active':'' }}"><a href="{{ $route }}">{{ trans('globals.all') }}</a></li>
                            <li class="list-group-item{{ $filter=='active'?' active':'' }}"><a href="{{ $route.'?filter=active' }}">{{ trans('globals.active') }}</a></li>
                            <li class="list-group-item{{ $filter=='inactive'?' active':'' }}"><a href="{{ $route.'?filter=inactive' }}">{{ trans('globals.inactive') }}</a></li>
                            @if (Auth::user())
                                <li class="list-group-item{{ $filter=='participations'?' active':'' }}"><a href="{{ $route.'?filter=participations' }}">{{ trans('freeproduct.participations') }}</a></li>
                            @endif
                        </ul>
                    </div>
                </div>

                {{-- list of freeproducts --}}
                <div class="container-fluid">
                    <div class="row">
                        @foreach ($freeproducts as $freeproduct)
                            @include('freeproducts.partial.freeproductbox2', $freeproduct)
                        @endforeach
                    </div>
                </div>

                @if (isset($freeproducts))
                    {!! $freeproducts->appends(Request::only(['filter']))->render() !!}
                @endif

                <div class="row ng-hide" ng-show="freeproducts.length < 1">
                    <div class="col-lg-12 alert-warning jumbotron">
                        <h4> <span class="glyphicon glyphicon-sunglasses"></span>
                            {{
                            ($filter==''?trans('freeproduct.not_freeproduct_registered'):'').
                            ($filter=='active'?trans('freeproduct.not_freeproducts_activated'):'').
                            ($filter=='inactive'?trans('freeproduct.not_freeproducts_inactivated'):'').
                            ($filter=='participations'?trans('freeproduct.not_freeproduct_participating'):'')

                        }}</h4>
                    </div>
                </div>
            </div>
        </div>
    @stop
@stop
@section('scripts')
    @parent
    <script>
        (function(app){
            app.controller('StoreFreeProducts', ['$scope', function($scope){
                var alldata=({!! $freeproducts->toJson() !!});
                $scope.freeproducts=alldata.data;
                $scope.myInterval = 3000;
                /*angular.forEach($scope.freeproducts, function(fp) {
                    if (fp.details == undefined) fp.details = [];
                    angular.forEach(fp.orders, function(order) {
                        //console.log(fp.details);
                        fp.details.push(order.details);
                    });
                });*/
                $scope.urlShow = '{{ route('freeproducts.show', 'freeproductId') }}';
                $scope.urlShowProduct = '{{ route('products.show', ['productId']) }}';
                $scope.toUrlShowProduct = function($productId) {
                    $scope.urlShowProduct = $scope.urlShowProduct.replace('productId',$productId);
                    return $scope.urlShowProduct;
                };
            }]);
            app.config(
                ['$animateProvider',
                    function ($animateProvider) {
                        $animateProvider.classNameFilter(/carousel/);
            }]);
        })(angular.module("AntVel"));
    </script>
@stop
