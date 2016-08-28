@extends('layouts.master')
@section('title')@parent - {{trans('store.your_wish_lists') }} @stop
@section('page_class') 'products_view' @stop

@section('css')
    @parent
@stop

@section('content')
    @parent

    @section('center_content')

    @include('partial.message')


    <ol class="breadcrumb">

        <li>{{ trans('store.your_wish_lists') }}</li>

    </ol>

    <div class="panel panel-primary">

        <div class="panel-heading">

            <div class="row">
                <div class="col-md-8 text-left">
                    <h6><span class="glyphicon glyphicon-gift"></span>&nbsp;{{trans('store.your_wish_lists') }}</h6>
                </div>
                <div class="col-md-4 text-right">
                    <button ng-controller="ModalCtrl" ng-click="modalOpen({templateUrl:'/wishes/create',controller:'WishListControllerModal',resolve:'wishList'})" class="btn btn-warning btn-sm">
                    <span class="glyphicon glyphicon-plus"></span>&nbsp;
                    {{ trans('store.CreateWishList') }}
                    </button>
                </div>
            </div>

        </div>

        <div class="panel-body">

            @if (is_object($orders) && count($orders) > 0)
                <div class="row">
                    <div class="col-md-6 col-xs-8 text-left">
                        <h6>{{ trans('globals.name') }}</h6>
                    </div>

                    <div class="col-md-3 col-xs-4 text-center">
                        <h6>{{ trans('store.items') }}</h6>
                    </div>

                    <div class="col-sm-3 text-center hidden-xs hidden-sm">
                        <h6>{{ trans('store.wish_list_view.update_label') }}</h6>
                    </div>
                </div>

                <hr>

                <?php $i=0; ?>
                @foreach ($orders as $order)

                    <div class="row">
                        <div class="col-md-6 col-xs-8 text-left">
                            <a href="{{ $order->details->count()>0 ? route('orders.show_wish_list_by_id', [$order->id]) : 'javascript:void(0)'  }}">
                                @if ($order->description!='')
                                    {{ $order->description }}
                                @else
                                    {{ trans('store.basic_wish_list') }}
                                @endif
                            </a>

                            @if ($order->description!='')
                                <p>
                                    <small><a href="{{ route('orders.delete', ['order_id' => $order->id, 'type' => $order->type]) }}"><i class="fa fa-trash"></i>&nbsp;{{ trans('globals.delete') }}</a></small>
                                </p>
                            @endif
                        </div>

                        <div class="col-md-3 col-xs-4 text-center">
                            {{ $order->details->count() }}
                        </div>

                        <div class="col-sm-3 text-center hidden-xs hidden-sm">
                            {{ Carbon\Carbon::parse($order->updated_at)->format('F j, Y') }}
                        </div>
                    </div>

                    @if ($i++ < (count($orders) - 1))
                        <hr>
                    @endif

                @endforeach

            @else

                <div class="row">&nbsp;</div>
                <div class="row">&nbsp;</div>
                <div class="row">&nbsp;</div>
                <div class="row">
                    <div class="col-lg-12 text-center">{{ trans('store.wish_list_view.empty_directory_message') }}</div>
                </div>
                <div class="row">&nbsp;</div>
                <div class="row">&nbsp;</div>
                <div class="row">&nbsp;</div>

            @endif

            <div class="row">&nbsp;</div>

        </div> {{-- panel body --}}

        <div class="panel-footer clearfix">

            @if (is_object($orders) && count($orders) > 0)
                <div class="row">
                    <div class="col-md-12">
                        <small>
                            {{ trans('store.priceDisclaimer') }}
                        </small>
                    </div>
                </div>
                <div class="row">&nbsp;</div>
            @endif
            <div class="row">
                <div class="col-md-12">
                    <a class="btn btn-success btn-sm" href="{{ route('products') }}">
                        <span class="glyphicon glyphicon-shopping-cart"></span>&nbsp;
                        {{trans('store.continue_shopping')}}
                    </a>
                </div>
            </div>
        </div> {{-- panel footer --}}

    </div> {{-- panel --}}


    @if(isset($suggestions) && is_array($suggestions))
        <div class="page-header">
            <h5>{{ trans('store.suggestions.trends_unlogged') }}</h5>
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

    @endsection
@stop