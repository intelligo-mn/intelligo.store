@extends('layouts.master')
@section('title')@parent - {{ trans('user.your_sales') }} @stop
@section('page_class') 'products_view' @stop

@include('partial.message')

@section('css')
    @parent
@stop

@section('content')

    @parent
    @section('panel_left_content')
        @include('user.partial.menu_dashboard')
    @stop
    @section('center_content')

        <div class="page-header">
            @if (\Auth::user()->role == 'person')
                <h5>{{ trans('user.your_orders') }}</h5>
            @else
                <h5>{{ trans('user.your_sales') }}</h5>
            @endif
        </div>

        @include('orders.partial.filterInputs', ['filter' => $dateFrom.'*'.$dateTo])

        <div ng-controller="Orders">

            <div class="tabbable">
                <ul class="nav nav-tabs hidden-xs">
                    <li class="{{ $select == 'open' || $select == '' ? 'active' : '' }}"><a href="#pane1" data-toggle="tab">{{ trans('store.openOrders') }}&nbsp;<span class="badge">{{ count($openOrders) }}</span></a></li>
                     <li class="{{ $select == 'rate' ? 'active' : '' }}"><a href="#pane4" data-toggle="tab">{{ trans('store.unrated_orders') }}&nbsp;<span class="badge">{{ count($unRate) }}</span></a></li>
                    <li class="{{ $select == 'closed' ? 'active' : '' }}"><a href="#pane2" data-toggle="tab">{{ trans('store.closedOrders') }}</a></li>
                    <li class="{{ $select == 'canceled' ? 'active' : '' }}"><a href="#pane3" data-toggle="tab">{{ trans('store.canceledOrders') }}</a></li>
                </ul>
                <div class="visible-xs-block">
                    <a href="#pane1" data-toggle="tab">{{ trans('store.open') }}&nbsp;<span class="badge">{{ count($openOrders) }}</span></a> -
                    <a href="#pane4" data-toggle="tab">{{ trans('store.unrated') }}&nbsp;<span class="badge">{{ count($unRate) }}</span></a> -
                    <a href="#pane2" data-toggle="tab">{{ trans('store.closed') }}</a> -
                    <a href="#pane3" data-toggle="tab">{{ trans('store.cancelled') }}</a>
                </div>

                <div class="row">
                    &nbsp;
                </div>

                <div class="tab-content">

                    {{-- pending orders --}}
                    <div id="pane1" class="tab-pane fade {{ $select == 'open' || $select == ''?'in active':'' }}">
                        @if (count($openOrders) > 0)
                            <div class="row">
                                <div class="col-lg-12">
                                    <table class="table table-hover table-responsive">
                                        <thead>
                                            <tr>
                                                <th class="text-center">{{ trans('store.order_label') }}</th>
                                                <th class="text-left">{{ trans('globals.customer_name') }}</th>
                                                <th class="text-center">{{ trans('user.email') }}</th>
                                                <th class="text-center">{{ trans('store.updated_on') }}</th>
                                                <th class="text-center">{{ trans('store.items') }}</th>
                                                <th class="text-right">{{ trans('globals.total') }}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($openOrders as $order)
                                            <?php $total = \Utility::totalOrder($order->details); ?>
                                            <tr>
                                                <td class="text-center">
                                                    @if (\Auth::user()->role == 'person')
                                                        <a href="{{ route('orders.show_order', $order->id) }}">#{{ \Utility::codeMasked($order->id) }}</a>
                                                    @else
                                                        <a href="{{ route('orders.show_seller_order', $order->id) }}">#{{ \Utility::codeMasked($order->id) }}</a>
                                                    @endif
                                                </td>
                                                <td class="text-left">{{ $order->user->profile['fullName'] }}</td>
                                                <td class="text-center"><a href="mailto:{{ $order->user->email }}">{{ $order->user->email }}</a></td>
                                                <td class="text-center">{{ Carbon\Carbon::parse($order->updated_at)->format('F j, Y') }}</td>
                                                <td class="text-center">{{ $total['qty'] }}</td>
                                                <td class="text-right">{{ \Utility::showPrice($total['total']) }}</td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    {!! $openOrders->appends(['show' => 'open', 'filter' => $dateFrom.'*'.$dateTo])->render() !!}
                                </div>
                            </div>
                        @else
                            <div class="row">
                                <div class="col-lg-12">
                                    <h6 class="alert-warning jumbotron">
                                        <span class="glyphicon glyphicon-exclamation-sign"></span>&nbsp;
                                        {{ trans('store.noOpenOrders') }}!
                                    </h6>
                                </div>
                            </div>
                        @endif
                    </div>

                    {{-- closed orders --}}
                    <div id="pane2" class="tab-pane fade {{ $select=='closed'?'in active':'' }}">
                        @if (count($closedOrders) > 0)
                            <div class="row">
                                <div class="col-lg-12">
                                    <table class="table table-hover table-responsive">
                                        <thead>
                                            <tr>
                                                <th class="text-center">{{ trans('store.order_label') }}</th>
                                                <th class="text-left">{{ trans('globals.customer_name') }}</th>
                                                <th class="text-center">{{ trans('user.email') }}</th>
                                                <th class="text-center">{{ trans('store.updated_on') }}</th>
                                                <th class="text-center">{{ trans('store.items') }}</th>
                                                <th class="text-right">{{ trans('globals.total') }}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($closedOrders as $order)
                                            <?php $total = \Utility::totalOrder($order->details); ?>
                                            <tr>
                                                <td class="text-center">
                                                    @if (\Auth::user()->role == 'person')
                                                        <a href="{{ route('orders.show_order', $order->id) }}">#{{ \Utility::codeMasked($order->id) }}</a>
                                                    @else
                                                        <a href="{{ route('orders.show_seller_order', $order->id) }}">#{{ \Utility::codeMasked($order->id) }}</a>
                                                    @endif
                                                </td>
                                                <td class="text-left">{{ $order->user->profile['fullName'] }}</td>
                                                <td class="text-center"><a href="mailto:{{ $order->user->email }}">{{ $order->user->email }}</a></td>
                                                <td class="text-center">{{ Carbon\Carbon::parse($order->updated_at)->format('F j, Y') }}</td>
                                                <td class="text-center">{{ $total['qty'] }}</td>
                                                <td class="text-right">{{ \Utility::showPrice($total['total']) }}</td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    {!! $closedOrders->appends(['show'=>'closed', 'filter' => $dateFrom.'|'.$dateTo])->render() !!}
                                </div>
                            </div>
                        @else
                            <div class="row">
                                <div class="col-lg-12">
                                    <h6 class="alert-warning jumbotron">
                                        <span class="glyphicon glyphicon-exclamation-sign"></span>&nbsp;
                                        {{ trans('store.noClosedOrders') }}!
                                    </h6>
                                </div>
                            </div>
                        @endif
                    </div>

                    {{-- cancelled orders --}}
                    <div id="pane3" class="tab-pane fade {{ $select=='canceled'?'in active':'' }}">
                        @if (count($cancelledOrders) > 0)
                            <div class="row">
                                <div class="col-lg-12">
                                    <table class="table table-hover table-responsive">
                                        <thead>
                                            <tr>
                                                <th class="text-center">{{ trans('store.order_label') }}</th>
                                                <th class="text-left">{{ trans('globals.customer_name') }}</th>
                                                <th class="text-center">{{ trans('user.email') }}</th>
                                                <th class="text-center">{{ trans('store.updated_on') }}</th>
                                                <th class="text-center">{{ trans('store.items') }}</th>
                                                <th class="text-right">{{ trans('globals.total') }}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($cancelledOrders as $order)
                                            <?php $total = \Utility::totalOrder($order->details); ?>
                                            <tr>
                                                <td class="text-center">
                                                    @if (\Auth::user()->role == 'person')
                                                        <a href="{{ route('orders.show_order', $order->id) }}">#{{ \Utility::codeMasked($order->id) }}</a>
                                                    @else
                                                        <a href="{{ route('orders.show_seller_order', $order->id) }}">#{{ \Utility::codeMasked($order->id) }}</a>
                                                    @endif
                                                </td>
                                                <td class="text-left">{{ $order->user->profile['fullName'] }}</td>
                                                <td class="text-center"><a href="mailto:{{ $order->user->email }}">{{ $order->user->email }}</a></td>
                                                <td class="text-center">{{ Carbon\Carbon::parse($order->updated_at)->format('F j, Y') }}</td>
                                                <td class="text-center">{{ $total['qty'] }}</td>
                                                <td class="text-right">{{ \Utility::showPrice($total['total']) }}</td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    {!! $cancelledOrders->appends(['show'=>'canceled', 'filter' => $dateFrom.'|'.$dateTo])->render() !!}
                                </div>
                            </div>
                        @else
                            <div class="row">
                                <div class="col-lg-12">
                                    <h6 class="alert-warning jumbotron">
                                        <span class="glyphicon glyphicon-exclamation-sign"></span>&nbsp;
                                        {{ trans('store.noCanceledOrders') }}!
                                    </h6>
                                </div>
                            </div>
                        @endif
                    </div>

                    {{-- rate products --}}
                    <div id="pane4" class="tab-pane fade {{ $select=='rate'?'in active':'' }}">
                        @if (count($unRate) > 0)
                            <div class="row">
                                <div class="col-lg-12">
                                    <table class="table table-hover table-responsive">
                                        <thead>
                                            <tr>
                                                <th class="text-center">{{ trans('store.order_label') }}</th>
                                                <th class="text-left">{{ trans('globals.customer_name') }}</th>
                                                <th class="text-center">{{ trans('user.email') }}</th>
                                                <th class="text-center">{{ trans('store.updated_on') }}</th>
                                                <th class="text-center">{{ trans('store.items') }}</th>
                                                <th class="text-right">{{ trans('globals.total') }}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($unRate as $order)
                                            <?php $total = \Utility::totalOrder($order->details); ?>
                                            <tr>
                                                <td class="text-center">
                                                    @if (\Auth::user()->role == 'person')
                                                        <a href="{{ route('orders.show_order', $order->id) }}">
                                                            #{{ \Utility::codeMasked($order->id) }}
                                                        </a>
                                                    @else
                                                        <a href="{{ route('orders.show_seller_order', $order->id) }}">
                                                            #{{ \Utility::codeMasked($order->id) }}
                                                        </a>
                                                    @endif
                                                    <span class="badge"> {{ $order->status }}</span>
                                                </td>
                                                <td class="text-left">{{ $order->user->profile['fullName'] }}</td>
                                                <td class="text-center"><a href="mailto:{{ $order->user->email }}">{{ $order->user->email }}</a></td>
                                                <td class="text-center">{{ Carbon\Carbon::parse($order->updated_at)->format('F j, Y') }}</td>
                                                <td class="text-center">{{ $total['qty'] }}</td>
                                                <td class="text-right">{{ \Utility::showPrice($total['total']) }}</td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    {!! $unRate->appends(['show'=>'rate', 'filter' => $dateFrom.'|'.$dateTo])->render() !!}
                                </div>
                            </div>
                        @else
                            <div class="row">
                                <div class="col-lg-12">
                                    <h6 class="alert-warning jumbotron">
                                        <span class="glyphicon glyphicon-exclamation-sign"></span>&nbsp;
                                        {{ trans('store.noProductsRare') }}!
                                    </h6>
                                </div>
                            </div>
                        @endif
                    </div>

                </div><!-- /.tab-content -->
            </div><!-- /.tabbable -->

        </div> {{-- angularjs controller --}}
    @stop
@stop

@section('scripts')
    @parent
    <script>
        (function(app){
        app.controller('Orders', ['$scope','$rootScope','$http','notify', function($scope,$rootScope,$http,notify){

            $scope.delivery = function(orderId,productId)
            {
                if (!productId || !orderId) return;
                $http.get('/virtualDelivery/'+orderId+'/'+productId+'/').success( function(data) {
                    var messageClass='alert-danger';
                    if (data.success){
                        messageClass='alert-success';
                        setTimeout(function(){ location.reload(); }, 3000);
                    }
                    notify({message:data.message,classes:messageClass});
                });
            }
            }]);

        })(angular.module("AntVel"));
    </script>
@stop