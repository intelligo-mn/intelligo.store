@extends('layouts.master')

@section('title')@parent - {{ trans('store.cart_view.your_shopping_cart') }} @stop

@section('page_class')products_view @stop

@section('breadcrumbs')
    @parent

    @if (isset($isResume))

        {!! Breadcrumbs::render('shoppingCartResume', $cartAddress->id) !!}

    @else

        {!! Breadcrumbs::render('shoppingCart') !!}

    @endif

@stop

@section('content')
    @parent

    @section('center_content')

    <div class="panel panel-default" ng-controller = "ShoppingCart" >

        <div class="panel-heading">
            <h6><span class="glyphicon glyphicon-shopping-cart"></span> {{ trans('store.cart_view.your_shopping_cart') }}</h6>
        </div>

        <div class="panel-body cart-resume">
            @include('partial.message')

            {{-- check out summary --}}
            @if(isset($isResume))
                <div class="alert alert-warning text-center text-small">
                    <h6><span class="fa fa-exclamation"></span>&nbsp;{{ trans('store.reviewOrder') }}</h6>
                </div>
            @endif

            @if (count($cart['details']) == 0)
                <div class="alert alert-warning text-center text-small">
                    <h6>{{ trans('store.noCart') }}</h6>
                    @if(!$user)
                        <small>{{ trans('store.cart_view.not_logged_disclaimer') }}</small>
                    @endif
                    <p>&nbsp;</p>
                    <a class="btn btn-primary" href="{{ route('products') }}">{{trans('store.continue_shopping')}}</a>
                </div>
            @endif

            {{-- Cart Totals --}}
            @if (count($cart['details']) > 0)
                <div class="row">
                    <div class="col-xs-12 col-md-7 col-lg-8 text-left text-small">
                       {{ trans('store.productsInCart') }} <span class="ng-cloak">[[totalItems]]</span> {{ trans('store.items') }}: <strong class="ng-cloak">[[ totalAmount | currency:"{{ config('app.payment_method') }} " ]]</strong>
                    </div>
                    <div class="col-xs-12 col-md-5 col-lg-4 text-center">
                        <div class="form-inline clearfix">
                            <div class="btn-group pull-right">
                                @if(isset($isResume))
                                    <a class="btn btn-info" href="{{ route('orders.place_order','cart') }}">
                                        <span class="fa fa-check-square-o"></span>&nbsp;
                                        {{ trans('store.placeYourOrder') }}
                                    </a>
                                @else
                                    <a class="btn btn-info" href="{{ route('orders.check_out') }}">
                                        <span class="fa fa-credit-card"></span>&nbsp;
                                        {{ trans('store.checkOutCart') }}
                                    </a>
                                @endif
                            </div>

                            @if(isset($user) && $user->isTrusted() && config('app.offering_free_products'))

                                <div class="btn-group pull-right">
                                    <a href="{{ route('freeproducts.create',[$cart->id]) }}" type="button" class="btn btn-success">{{ trans('freeproduct.create') }}</a>
                                    &nbsp;
                                </div>

                            @endif
                        </div>
                    </div>
                </div>
                <hr/>
            @endif

            {{-- cart details --}}
            <div class="row">
                @foreach ($cart['details'] as $item)

                    <div class="text-small col-lg-6">

                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <a ng-controller="ModalCtrl" ng-init='data={"data":"{{ $item["product"]["id"] }}"}' ng-click="modalOpen({templateUrl:'/modalDetailsProductCart',controller:'getDetailsProductInCart',resolve:'data'})">
                                <img class="thumbnail" src='{{ $item["product"]["features"]["images"][0] }}' alt="{{ $item['product']['name'] }}" height="150" width="150">
                            </a>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                            <h6>
                                <a ng-controller="ModalCtrl" ng-init='data={"data":"{{ $item["product"]["id"] }}"}' ng-click="modalOpen({templateUrl:'/modalDetailsProductCart',controller:'getDetailsProductInCart',resolve:'data'})">
                                    {{ $item['product']['name'] }}
                                </a>
                            </h6>

                            <div>
                                <strong>{{ Utility::showPrice($item['price']) }}</strong>
                            </div>

                            <div>
                                @if(isset($isResume))
                                    {{ $item['quantity'].' '.trans('store.items') }}
                                @else
                                    <strong>
                                        @if ($item['product']['type'] != 'item')
                                            <span>{{ $item['quantity'] }}</span>
                                        @else

                                            @if ($user)
                                                <select class="form-control col-lg-6" name="cartQty" id="cartQty" ng-init = "cart['{{ $item['product']['id'] }}'] = '{{ $item['quantity'] }}'" ng-model = "cart['{{ $item['product']['id'] }}']" ng-change = "changeQuantity('{{ $cart['id'] }}', '{{ $item['id'] }}', cart['{{ $item['product']['id'] }}'])" >

                                                    @for ($i=1; $i<$item['product']['stock']; $i++)

                                                    <option ng-selected="'{{ $i }}' == '{{ $item['quantity'] }}' " value="{{ $i }}">{{ $i }}</option>

                                                    @endfor


                                                </select>
                                            @else
                                                 <span>{{ $item['quantity'] }}</span>
                                            @endif

                                            <small>{{ trans('store.items') }}</small>

                                        @endif
                                    </strong>
                                @endif
                            </div>

                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-small">
                            <a href="{{ action('OrdersController@removeFromOrder', ['cart', $item['product']['id']]) }}">{{ trans('store.delete') }}</a>
                            @if(isset($user))
                                | <a href="{{ action('OrdersController@moveFromOrder', ['cart', 'later', $item['product']['id']]) }}">{{ trans('store.saveForLater') }}</a>
                                | <a ng-controller="ModalCtrl" href="javascript:void(0)" ng-init='data={"data":"{{ $item["product"]["id"] }}"}' ng-click="modalOpen({templateUrl:'/modalDetailsProductCart',controller:'getDetailsProductInCart',resolve:'data'})">{{ trans('product.globals.view_details') }}</a>
                            @endif
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><hr/></div>
                    </div>
                @endforeach
            </div>

            <!-- Address -->
            @if(isset($isResume) && count($cart['details']) > 0)
                <div class="row">
                    <div class="col-xs-8 col-sm-9 col-md-6 col-lg-4">
                        <div class="panel panel-success">
                            <div class="panel-heading">{{ trans('store.shipToThisAddress') }}</div>
                            <div class="panel-body">
                                <address>
                                    <strong>{{ $cartAddress->name_contact }}</strong><br>
                                    {{ $cartAddress->line1 }}[[address.line1]]<br>
                                    <span ng-hide="address.details.line2 != ''">{{ $cartAddress->line2 }}<br></span>
                                    {{ $cartAddress->city }}, {{ $cartAddress->state }}<br>
                                    {{ $cartAddress->country }}<br>
                                    {{ $cartAddress->phone }}<br>
                                </address>
                            </div>
                            <div class="panel-footer"><a class="btn btn-success btn-sm" href="{{ route('orders.check_out') }}">{{ trans('globals.change_label') }}</a></div>
                        </div>
                    </div>
                </div>
            @endif

        </div> {{-- panel-body --}}

        @if (count($cart['details']) > 0)
            <div class="panel-footer">{{ trans('store.priceDisclaimer') }}</div>
        @endif

    </div> {{-- panel --}}


    {{-- later cart details --}}

    @if($user && isset($laterCart) && count($laterCart['details']) > 0)

        <div class="panel panel-default">
            <div class="panel-heading">
                <h6><span class="glyphicon glyphicon-floppy-saved"></span> {{ trans('store.productsSavedForLater') }}</h6>
            </div>
            <div class="panel-body">
                <div class="row">
                    @foreach ($laterCart['details'] as $item)

                        <div class="text-small col-lg-6">

                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <a ng-controller="ModalCtrl" ng-init='data={"data":"{{ $item["product"]["id"] }}"}' ng-click="modalOpen({templateUrl:'/modalDetailsProductCart',controller:'getDetailsProductInCart',resolve:'data'})">
                                    <img class="thumbnail" src='{{ $item["product"]["features"]["images"][0] }}' alt="{{ $item['product']['name'] }}" height="150" width="150">
                                </a>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                                <h6>
                                    <a ng-controller="ModalCtrl" ng-init='data={"data":"{{ $item["product"]["id"] }}"}' ng-click="modalOpen({templateUrl:'/modalDetailsProductCart',controller:'getDetailsProductInCart',resolve:'data'})">
                                        {{ $item['product']['name'] }}
                                    </a>
                                </h6>

                                <div>
                                    <strong>{{ Utility::showPrice($item['price']) }}</strong>
                                </div>

                                <div>
                                    @if(isset($isResume))
                                        {{ $item['quantity'].' '.trans('store.items') }}
                                    @else
                                        <strong>
                                            @if ($item['product']['type'] != 'item')
                                                <span>{{ $item['quantity'] }}</span>
                                            @else
                                                <select class="form-control col-lg-6" name="quantity" id="quantity">

                                                    @for ($i=0; $i<$item['product']['stock']; $i++)

                                                    <option value="{{ $i }}" {{ ($item['quantity'] == $i) ? 'selected' : '' }}>{{ $i }}</option>

                                                    @endfor

                                                </select> <small>{{ trans('store.items') }}</small>
                                            @endif
                                        </strong>
                                    @endif
                                </div>

                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-small">
                                <a href="{{ action('OrdersController@removeFromOrder', ['later', $item['product']['id']]) }}">{{ trans('store.delete') }}</a>
                                @if(isset($user))
                                    | <a href="{{ action('OrdersController@moveFromOrder', ['later','cart', $item['product']['id']]) }}">{{ trans('store.moveToCart') }}</a>
                                    | <a ng-controller="ModalCtrl" href="javascript:void(0)" ng-init='data={"data":"{{ $item["product"]["id"] }}"}' ng-click="modalOpen({templateUrl:'/modalDetailsProductCart',controller:'getDetailsProductInCart',resolve:'data'})">{{ trans('product.globals.view_details') }}</a>
                                @endif
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><hr/></div>
                        </div>
                    @endforeach
                </div>
            </div> {{-- panel body --}}
            <div class="panel-footer">{{ trans('store.priceDisclaimer') }}</div>
        </div> {{-- panel --}}

    @endif

    @if(isset($suggestions) && is_array($suggestions))
        <div class="row">&nbsp;</div>
        <div class="page-header">
            <h5>{{ trans('store.suggestions.cart') }}</h5>
        </div>
        <section class="products_view">
            <div class="container-fluid marketing">
                <div class="row">
                    @foreach ($suggestions as $productSuggestion)
                        @include('products.partial.productBox', $productSuggestion)
                    @endforeach
                </div>
            </div>
        </section>
    @endif

    @endsection {{-- center_content --}}
@stop {{-- content --}}

@section('scripts')
    @parent
    {!! Html::script('js/star-rating.js') !!}
    <script>
        (function(app){
            app.controller('ShoppingCart', ['$scope','$http', function($scope, $http)
            {
                $scope.totalAmount = '{{ $totalAmount }}';
                $scope.totalItems = '{{ $totalItems }}';

                $scope.changeQuantity = function(orderId, detailId, newValue)
                {
                    $scope.qtyUrl = "{{ route('orders.update_order_quantity', ['orderId', 'detailId','newValue']) }}";

                    var URLAPI = $scope.qtyUrl.replace('detailId', detailId);

                    URLAPI = URLAPI.replace('newValue', newValue);

                    URLAPI = URLAPI.replace('orderId', orderId);

                    $http.get(URLAPI)
                        .success(function(data)
                        {
                            var qtyDiff = data.detail.quantity - data.oldQuantity;

                            var priceDiff = qtyDiff * data.detail.price;

                            $scope.totalAmount = Number($scope.totalAmount) + priceDiff;

                            $scope.totalItems = Number($scope.totalItems) + qtyDiff;
                        });
                };


            }]);

        })(angular.module("AntVel"));
    </script>
@stop

