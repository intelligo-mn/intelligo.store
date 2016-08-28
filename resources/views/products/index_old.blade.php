@extends('layouts.master')
@section('title')@parent - {{ trans('store.products') }} @stop
@section('page_class') products_view @stop

@section('css')
    @parent
@stop
{{-- {{  dd($products->toArray()) }} --}}
@section('content')
    <div id="menu-top-category" class="navbar-wrapper">
        
        <div id="top-categories" class="navbar-collapse collapse" ng-controller="FilterController">
             <ol class="breadcrumb" >
                <li class="total">
                    <span class="badge">{{ $products->total() }}</span> <small> {{trans('globals.searchResults') }} </small>
                </li>
                <li ng-repeat="filter in filters" class="ng-cloak" ng-show="filters">
                    <small>
                        <span ng-bind-html="(filter.value.name)? filter.value.name:filter.value"></span>
                        <small>
                            <span data-role="remove" ng-click="removeFilter(filter)" class="glyphicon glyphicon-remove"></span>
                        </small>
                    </small>
                </li>
                @if(isset($search))
                <li>"{{ $search }}"</li>
                @endif
             </ol>
        </div>
    </div>
    @parent
    @section('panel_left_content')
        <div  class="vertical-nav">
            <div class="navbar navbar-default" role="navigation">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
                        <span class="sr-only">{{ trans('globals.refine') }}</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <span class="visible-xs-block navbar-brand">{{ trans('globals.refine') }}</span>
                </div>
                <div id="menu-left-category" class="navbar-collapse collapse sidebar-navbar-collapse" ng-controller="FilterController" ng-cloak>
                    <div class="filters-applied ng-cloak visible-xs" ng-show="filters" >
                        <span ng-repeat="filter in filters">
                            <button  type="button" class="text-capitalize btn btn-warning btn-xs"  ng-click="removeFilter(filter)">
                                <span ng-bind-html="(filter.value.name)? filter.value.name:filter.value"></span>
                                <span data-role="remove" class="glyphicon glyphicon-remove"></span>
                            </button>
                        </span>
                    </div>
                    <h5>{{ trans('globals.refine_by') }}</h5>
                    @foreach ($filters as $key => $filter)
                    <ul class="nav navbar-nav list-group {{ $key }}" >
                        <h4 class="small breadcrumb">{{ trans('globals.filters.'.$key) }}</h4>
                        <?php $i=0; ?>
                        @if($key=='categories')
                            @foreach ($filter as $id => $item)
                                <?php if (5<$i++) {
    break;
} ?>
                            <li class="text-capitalize" ng-click="refineBy('{{ $key }}',{name:'{{ $item['name'] }}',id:'{{ $item['id'] }}'})"  >{{ $item['name'] }} <span class="badge">{{ $item['qty'] }}</span></li>
      
                            @endforeach
                        @else
                            @foreach ($filter as $item => $count)
                                <?php if (5<$i++) {
    break;
} ?>
                            <li class="text-capitalize" ng-click="refineBy('{{ $key }}','{{ $item }}')"  >{{ $item }} <span class="badge">{{ $count }}</span></li>
                            @endforeach
                        @endif
                    </ul>
                    123
                    <script type='text/ng-template' id="{{ $key }}-snippet" class="panel">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button ng-click="$close(false)" type="button" class="close"><span aria-hidden="true">&times;</span></button>
                                {{ trans('globals.filters.'.$key) }}
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <ul class="list-inline">
                                        @if($key=='categories')
                                            @foreach ($filter as $id => $item)
                                            <li class="text-capitalize  col-xs-12 col-sm-6 col-md-4" ng-click="refineBy('{{ $key }}',{name:'{{ $item['name'] }}',id:'{{ $item['id'] }}'})"><a href="javascript: void(0)" >{{ $item['name'] }} <span class="badge">{{ $item['qty'] }}</span></a></li>
                                            @endforeach
                                        @else
                                            @foreach ($filter as $item => $count)
                                            <li class="text-capitalize  col-xs-12 col-sm-6 col-md-4" ng-click="refineBy('{{ $key }}','{{ $item }}')"  ><a href="javascript: void(0)" >{{ $item }} <span class="badge">{{ $count }}</span></a></li>
                                            @endforeach
                                        @endif
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </script>
456

                    <small ng-show="6<{{ $i }}" ng-controller="ModalCtrl" ng-click="modalOpen({templateUrl:'{{ $key }}-snippet',controller:'FilterController'})" > <a href="javascript: void(0)" > {{trans('globals.see_more')}}</a></small>
                    @endforeach
                    <ul class="nav navbar-nav list-group price-range">
                        <h6 class="small">{{ trans('globals.filters.price_range') }}</h6>
                        <li>
                            <form class="form-inline" name="rangepriceForm" novalidate>
                                <div class="form-group">
                                    <label for="min">Min</label>
                                    <input class="form-control input-sm" ng-model="minPrice" type="number" min="0" max="{{ $expensive_product-1 }}" name="min" id="min" required>
                                </div>
                                <div class="form-group">
                                    <label for="max">Max</label>
                                    <input class="form-control input-sm" ng-model="maxPrice" type="number" min="1" max="{{ $expensive_product }}" name="max" id="max" required>
                                    <button class="btn btn-danger btn-xs" ng-click="priceRange(minPrice, maxPrice, rangepriceForm)"><span class="fui-arrow-right"></span></button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    @stop

    @section('center_content')
        <div class="container-fluid marketing">
            <div class="row">
                @foreach ($products->toArray()['data'] as $product)
                    @include('products.partial.productBox', $product)
                @endforeach
            </div>
            <div class="row">
                {!! $products->appends(Request::only(['search','categories', 'refine']))->render() !!}
            </div>
        </div>
    @stop
@stop

@section('scripts')
    @parent
    <script>
        (function(app){
            app.controller('FilterController', function($scope, $http, $location) {
                $scope.filters = [];
                $scope.minPrice = 0;
                $scope.maxPrice = 0{{ $expensive_product }};
                var search=({!! json_encode($_GET) !!})||{};//Parametros get en la url
                function formatSearch(obj){
                    var get=[];
                    for(key in obj){
                        get.push(key+'='+encodeURI(JSON.stringify(obj[key]))
                            .replace(/&/g,'%26')
                        );
                    }
                    return '?'+get.join('&');
                }
                function refineURL(){
                    var refine=[],el;
                    for (var i=0; i< $scope.filters.length;i++) {
                        el={};
                        el[$scope.filters[i].name]=$scope.filters[i].value;
                        refine.push(el);
                        console.log(JSON.stringify(el));
                    }
                    // $location.search('refine',JSON.stringify(refine));
                    // $location.search('page',1);
                    // location.reload(false);
                    // window.location = $location.absUrl();
                    window.location.search=formatSearch({refine:refine,page:1});
                }

                $scope.refineBy = function(name, value){
                    // $('ul.'+name).fadeOut();
                    var filter = {'name':name,'value':value};
                    $scope.removeFilter(filter,0);
                    $scope.filters.push(filter);
                    refineURL();
                };

                $scope.priceRange = function(min, max, form){
                    if (form.$valid && min < max) {
                        $('ul.price-range').fadeOut();
                        var value = min+' - '+max+'pts';
                        var filter = {'name':'price-range','value':value};
                        $scope.filters.push(filter);
                        refineURL();
                    }
                };

                $scope.removeFilter = function(filter,redirect){
                    var filters = [];
                    if(redirect === undefined){
                        redirect=1;
                    }
                    for (var key in $scope.filters) {
                       if(angular.toJson($scope.filters[key])!=angular.toJson(filter)){
                            filters.push($scope.filters[key]);
                       }
                    }
                    $scope.filters=filters;
                    if(redirect){
                        $('ul.'+filter.name).fadeIn();
                        refineURL();
                    }
                };
                
                if (search.search) {
                    angular.element(document).ready(function () {
                        $('#searchBox').val(search.search);
                    });
                }
                // Verificamos si hay filtros
                if (search.refine) {
                    search = JSON.parse(search.refine);
                    for (var i = 0; i < search.length; i++) {
                        for (var prop in search[i]) {
                           // $('ul.'+prop).fadeOut();
                            var value = (search[i][prop].name)? search[i][prop]:search[i][prop];
                            $scope.filters.push({'name':prop,'value':value});
                        }
                    }
                }
            });
        })(angular.module("AntVel"));
    </script>
@stop