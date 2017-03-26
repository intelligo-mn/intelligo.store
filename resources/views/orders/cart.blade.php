@extends('layouts.master')

@section('title')@parent - {{ trans('store.cart_view.your_shopping_cart') }} @stop

@section('page_class')products_view @stop



@section('content')
    @parent

    @section('center_content')

 @if (isset($isResume))

      
             <div class="producttitle"  >
    <div class="titlecolor text-center" >
    <br>
          
             <div class="breadcrumbstext"> {!! Breadcrumbs::render('shoppingCartResume', $cartAddress->id) !!}</div>
            <br>
        </div>      
</div>

    @else

       
            <div class="producttitle"  >
    <div class="titlecolor text-center" >
    <br>
          
             <div class="breadcrumbstext"> {!! Breadcrumbs::render('shoppingCart') !!}</div>
            <br>
        </div>      
</div>
<br>

    @endif

    <div class=" cart_panel  panel-default" ng-controller = "ShoppingCart" >
       {{-- cart details --}}

        @if (count($cart['details']) != 0)
            <div class="row">
                <table class="shop_table_cart" cellspacing="0">
                <thead>
                    <tr>
                        <th class="product-thumbnail first">Бараа</th>
                        <th class="product-price ">Үнэ</th>
                        <th class="product-quantity ">тоо ширхэг</th>
                        <th class="product-remove last">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                @foreach ($cart['details'] as $item)
                    <tr class="cart_table_item">

                        <!-- The thumbnail -->
                        <td class="product-thumbnail product-name">
                            <div class="wd_product_content">
                                <div class="wd_product_item">
                                   <a ng-controller="ModalCtrl" ng-init='data={"data":"{{ $item["product"]["id"] }}"}' ng-click="modalOpen({templateUrl:'/modalDetailsProductCart',controller:'getDetailsProductInCart',resolve:'data'})">
                                    <img class="thumbnail" src='{{ $item["product"]["features"]["images"][0] }}' alt="{{ $item['product']['name'] }}" height="150" width="150">
                                     </a>
                                </div>
                                <div class="wd_product_meta">
                                    <h3><a ng-controller="ModalCtrl" ng-init='data={"data":"{{ $item["product"]["id"] }}"}' ng-click="modalOpen({templateUrl:'/modalDetailsProductCart',controller:'getDetailsProductInCart',resolve:'data'})">
                                    {{ $item['product']['name'] }}
                                     </a></h3>
                                </div>
                            </div>
                            <!-- Product Name -->

                        </td>

                        <!-- Product price -->
                        <td class="product-price">
                            <span class="amount"><strong>{{ Utility::showPrice($item['price']) }}</strong></span> </td>

                        <!-- Quantity inputs -->
                        <td class="product-quantity">
                            <!--span class="pre_quantity">qty</span-->
                            <div class="quantity">
                                @if(isset($isResume))
                                    {{ $item['quantity'].' '.trans('store.items') }}
                                @else
                                    <strong>
                                        @if ($item['product']['type'] != 'item')
                                            <span>{{ $item['quantity'] }}</span>
                                        @else

                                            @if ($user)
                                                <select class="form-control col-lg-6" name="cartQty" id="cartQty" ng-init = "cart['{{ $item['product']['id'] }}'] = '{{ $item['quantity'] }}'" ng-model = "cart['{{ $item['product']['id'] }}']" ng-change = "changeQuantity('{{ $cart['id'] }}', '{{ $item['id'] }}', cart['{{ $item['product']['id'] }}'])" >

<!--                                                     @for ($i=1; $i<$item['product']['stock']; $i++)

                                                    <option ng-selected="'{{ $i }}' == '{{ $item['quantity'] }}' " value="{{ $i }}">{{ $i }}</option>

                                                    @endfor
 -->

                                                </select>
                                            @else
                                                 <span>{{ $item['quantity'] }}</span>
                                            @endif

                                            <small>{{ trans('store.items') }}</small>

                                        @endif
                                    </strong>
                                @endif
                            </div>
                        </td>

                        
                        <td class="product-removelink">
                            <a class="remove" href="{{ action('OrdersController@removeFromOrder', ['cart', $item['product']['id']]) }}" title="Remove this item">×</a>
                    </tr>
                    <tr class="hidden">
                        <td colspan="6" class="actions">

                            <input class="button hidden wd_update_button_invisible" name="update_cart" value="Update Cart" type="submit">


                            <!--<input type="submit" class="checkout-button button alt" name="proceed" value="Proceed to Checkout" />-->

                            <a href="http://glory.demo1.wpdance.com/supermarket/checkout/" class="checkout-button button alt wc-forward">
                                Proceed to Checkout</a>

                            <input id="_wpnonce" name="_wpnonce" value="4e6ecc970d" type="hidden">
                            <input name="_wp_http_referer" value="/supermarket/cart/" type="hidden">
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        @endif



        <div class="panel-body cart-resume">
            @include('partial.message')

            {{-- check out summary --}}
            @if(isset($isResume))
                <div class="alert  text-small">
                    <h5><span class="fa fa-exclamation"></span>&nbsp;{{ trans('store.reviewOrder') }}</h5>
                </div>
            @endif

            @if (count($cart['details']) == 0)

                <div class="alert  text-small">
                    <h5>{{ trans('store.noCart') }}</h5>
                    @if(!$user)
                        <small>{{ trans('store.cart_view.not_logged_disclaimer') }}</small>
                    @endif
                    <p>&nbsp;</p>
                    <a class="btn btn-primary cart-btn-white" href="{{ route('products') }}">{{trans('store.continue_shopping')}}</a>
                </div>
            @endif

            {{-- Cart Totals --}}
            @if (count($cart['details']) > 0)
                <div class="row">
                    <h3>Сагсны нийт дүн </h3>
                    <div class="titlelines"></div>
                    <div class="col-xs-12 col-md-7 col-lg-8 text-left text-small">
                       {{ trans('store.productsInCart') }} <span class="ng-cloak">[[totalItems]]</span> {{ trans('store.items') }}: <strong class="ng-cloak">[[ totalAmount | currency:"{{ config('app.payment_method') }} " ]]</strong>
                    </div>
                    <div class="col-xs-12 col-md-5 col-lg-4 text-center">
                        <div class="form-inline clearfix">
                            <div class="btn-group pull-right ">
                                @if(isset($isResume))
                                    <a class="btn btn-info cart-btn-white" href="{{ route('orders.place_order','cart') }}">
                                        <span class="fa fa-check-square-o"></span>&nbsp;
                                        {{ trans('store.placeYourOrder') }}
                                    </a>
                                @else

                                    <a class="btn btn-info cart-btn-white" href="{{ route('orders.check_out') }}">
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
            @endif

         

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
<!-- 
                                                    @for ($i=0; $i<$item['product']['stock']; $i++)

                                                    <option value="{{ $i }}" {{ ($item['quantity'] == $i) ? 'selected' : '' }}>{{ $i }}</option>

                                                    @endfor -->

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
        </div> {{-- panel --}}

    @endif

    @if(isset($suggestions) && is_array($suggestions))
        <div class="row">&nbsp;</div>
        
        <section class="products_view">
            <h3>{{ trans('store.suggestions.cart') }}</h3>
            <div class= "titlelines"></div>
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

        })(angular.module("Bella"));
    </script>
@stop

