@extends('layouts.master')
@section('title')@parent - {{trans('store.wish_list') }} @stop
@section('page_class') 'products_view' @stop

@section('css')
    @parent
@stop

@section('content')
    @parent

    @if (\Auth::user())
        @section('panel_left_content')
            @include('user.partial.menu_dashboard')
        @stop
    @endif

    @section('center_content')

        @include('partial.message')

        <ol class="breadcrumb">

            <li><a href="{{ route('orders.show_list_directory') }}">{{ trans('store.your_wish_lists') }}</a></li>

            <li>{{ $wishListName }}</li>

        </ol>
        @if ($hasWishList || $hasLaterCart)
            <div class="panel panel-primary">

                <div class="panel-heading">
                    <h6>
                        <span class="glyphicon glyphicon-gift"></span>&nbsp;
                        {{trans('store.wish_list') }}
                        @if (trim($wishListName) != '')
                            &nbsp;-&nbsp;{{ $wishListName }}
                        @endif
                    </h6>
                </div>

                <div class="panel-body">

                    {{-- cart grid --}}

                    @if ($hasWishList)
                        <div class="row hidden-xs">
                            <div class="col-sm-9 text-left">
                                <h6>{{ trans('store.wish_list_view.products_in_wish_list') }}</h6>
                            </div>
                            <div class="col-sm-1 text-center">
                                <h6>{{ trans('store.quantity') }}</h6>
                            </div>
                            <div class="col-sm-2 text-right">
                                <h6>{{ trans('store.price') }}</h6>
                            </div>
                        </div>

                        <hr>

                        @foreach ($cart->details as $detail)

                            <div class="row">
                                <div class="col-sm-2 col-xs-4 text-center">
                                    <img  class="img-rounded" src='{{ $detail->product->features['images'][0] }}' alt="{{ $detail->product->name }}" width="90" height="90">
                                </div>

                                <div class="col-sm-7 col-xs-8 text-left">
                                    <h6>
                                        <a href="{{ action('ProductsController@show', $detail->product->id) }}">
                                            {{ $detail->product->name }}
                                        </a>
                                    </h6>
                                   <a href="{{ action('OrdersController@removeFromOrder', ['wishlist', $detail->product->id, $cart->id])}}">
                                        {{ trans('store.delete') }}
                                   </a> |
                                    <a href="{{ action('OrdersController@moveFromOrder', ['wishlist','cart', $detail->product->id])}}">
                                        {{ trans('store.moveToCart') }}
                                    </a>
                                </div>

                                <div class="col-sm-1 col-xs-4 text-center">
                                    <h6 class="hidden-xs">
                                        {{ $detail->quantity }}
                                    </h6>
                                    <span class="visible-xs"><br>
                                        {{ trans('store.quantity').' '.$detail->quantity }}
                                    </span>
                                </div>

                                <div class="col-sm-2 col-xs-4 text-right">
                                    <h6 class="hidden-xs">
                                        {{ Utility::showPrice($detail->price) }}
                                    </h6>
                                    <span class="visible-xs"><br>
                                        {{ Utility::showPrice($detail->price) }}
                                    </span>
                                </div>

                            </div>
                            <hr>

                        @endforeach
                    @endif

                    {{-- later cart grid --}}

                    @if ($hasLaterCart)
                        <div class="page-header">
                            <h5>{{ trans('store.productsSavedForLater') }}</h5>
                        </div>

                        @foreach ($laterCart->details as $detail)

                            <div class="row">
                                <div class="col-lg-2 text-center">
                                    <img  class="img-rounded" src='{{ $detail->product->features['images'][0] }}' alt="{{ $detail->product->name }}" width="90" height="90">
                                </div>
                                <div class="col-lg-7 text-left">
                                    <h6>
                                        <a href="{{ action('ProductsController@show', $detail->product->id) }}">{{ $detail->product->name }}</a>
                                    </h6>
                                    <a href="{{ action('OrdersController@removeFromOrder', ['later', $detail->product->id]) }}">
                                    {{ trans('store.delete') }}</a> |
                                    <a href="{{ action('OrdersController@moveFromOrder', ['later','cart', $detail->product->id]) }}">
                                    {{ trans('store.moveBackToCart') }}</a>
                                </div>
                                <div class="col-lg-1 text-center">
                                    <h6>{{ $detail->quantity }}</h6>
                                </div>
                                <div class="col-lg-2 text-right">
                                    <h6>{{ Utility::showPrice($detail->price) }}</h6>
                                </div>
                            </div>

                        @endforeach
                    @endif

                </div> {{-- panel body --}}

                <div class="panel-footer clearfix">
                    <div class="row">
                        <div class="col-md-12">
                            {{ trans('store.priceDisclaimer') }}
                        </div>
                    </div>
                    <div class="row">&nbsp;</div>
                    <div class="row">
                        <div class="col-md-12">
                            <a class="btn btn-success btn-sm" href="{{ route('products') }}">
                                <span class="glyphicon glyphicon-shopping-cart"></span>&nbsp;
                                {{trans('store.continue_shopping')}}
                            </a>
                        </div>
                    </div>
                </div>  {{-- panel-footer --}}

            </div> {{-- panel --}}

        {{-- if there is not products saved in the wish list --}}
        @else

            <div class="row">&nbsp;</div>

            <div class="alert alert-warning" role="alert">

                <div class="row">
                    <div class="col-lg-12 text-center">
                        <strong class="text-center">
                            {{ str_replace('[name]', '('.ucfirst ($wishListName).')', trans('store.wish_list_view.empty_list_title')) }}
                        </strong>
                    </div>
                </div>
                <div class="row">&nbsp;</div>
                <div class="row">
                    <div class="col-lg-12 text-center">{{ trans('store.wish_list_view.empty_list_message') }}</div>
                </div>

            </div>

            <div class="row">&nbsp;</div>

        @endif {{-- if there is something in the wishes --}}

        @if(isset($suggestions) && is_array($suggestions))
            <div class="page-header">
                <h5>{{ trans('store.suggestions.wish') }}</h5>
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

    @stop

@stop