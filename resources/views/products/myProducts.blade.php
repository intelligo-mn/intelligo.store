@extends('layouts.master')
@section('title')@parent - {{ trans('user.your_products') }} @stop
@section('page_class') my-products @stop
@section('content')
    @parent
    @section('panel_left_content')
        @include('user.partial.menu_dashboard')
    @stop
    @section('center_content')

        <div class="page-header"><h5>{{ trans('user.your_products') }}</h5></div>
        
        <div class="row">
           <div class="col-lg-11">
                <div class="dropdown pull-left">
                <button class="btn btn-sm btn-info dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span class="glyphicon glyphicon-filter"></span>&nbsp;

                @if (trim(\Request::get('filter'))!='')
                    {{ trans('globals.filtered').' '.ucwords(\Request::get('filter')) }}
                @else
                    {{ trans('globals.filter') }}
                @endif
                <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="{{ route('products.myProducts') }}">{{ trans('globals.all') }}</a></li>
                <li><a href="{{ route('products.myProducts').'?filter=active' }}">{{ trans('globals.active') }}</a></li>
                <li><a href="{{ route('products.myProducts').'?filter=inactive' }}">{{ trans('globals.inactive') }}</a></li>
                <li><a href="{{ route('products.myProducts').'?filter=low' }}">{{ trans('product.inputs_view.low_stock') }}</a></li>
                </ul>
                </div>
            </div>
            <div class="col-lg-1">
                <a class="btn btn-primary btn-sm pull-right" href="{{ route('products.create') }}">
                    <span class="glyphicon glyphicon-plus"></span>&nbsp;
                    {{ trans('product.globals.add') }}
                </a>
            </div>
        </div>
        
        <div class="row">&nbsp;</div>
        <div class="row">&nbsp;</div>
       
        <div class="row">
            @foreach ($products as $product)
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div class="thumbnail">
                        <div style="height: 18em;">
                            @if ($product->status == 1)
                                <span class="label label-success">{{ trans('globals.active') }}</span>
                            @endif
                            @if ($product->status == 0)
                                <span class="label label-warning">{{ trans('globals.inactive') }}</span>
                            @endif
                            
                            <a href="{{ action('ProductsController@index') }}/{{ $product->id }}">
                                @if (isset($product->features['images'][0]))
                                    <img class="thumbnail"  
                                         src="{{ $product->features['images'][0] }}?w=100" alt="{{ $product->name }}" 
                                         width="100" height="100">
                                @else
                                    <img class="thumbnail" src="/img/no-image.jpg" alt="{{ $product->name }}" width="100" height="100">
                                @endif
                                <p style="overflow: hidden; text-overflow: ellipsis; -o-text-overflow: ellipsis;">
                                    {{ $product->name }}</small>
                                </p>
                            </a>
                            @if ($product->stock <= $product->low_stock)
                                <span>{{ $product->stock }} {{ trans('store.inStock') }} 
                                    <span class="label label-danger">{{ ' '.trans('product.inputs_view.low_stock') }}</span>
                                </span>
                            @endif
                            <small>{{ $product->view_counts.' '.trans('product.globals.views') }} 
                            @if ($product->rate_count > 0)
                                {{ Utility::showRate($product->rate_val) }}
                            @endif
                            </small>
                            <p>
                            {!! \Utility::printBarCode($product) !!}
                            </p>
                            <p>
                                <strong>{{ Utility::showPrice($product->price) }}</strong>
                                <a class="btn-xs btn-primary" href="{{ action('ProductsController@index') }}/{{ $product->id }}/edit" role="button">{{ trans('globals.edit') }}</a>
                                <a class="btn-xs btn-default" href="{{ action('ProductsController@index') }}/{{ $product->id }}" role="button">{{ trans('product.globals.view_details') }} &raquo;</a>
                            </p>
                        </div>
                    </div>
                </div><!-- /.col-lg-4 -->
            @endforeach
        </div>

    @if (count($products) < 1)
        
        <div class="row"> 
            <div class="col-lg-12">
                <div class="alert alert-warning">
                    <strong>
                        <span class="glyphicon glyphicon-filter"></span>&nbsp;
                        {{ trans('globals.your_filter') }}
                        @if (trim(\Request::get('filter'))!='')
                        &nbsp;"{{ ucwords(\Request::get('filter')) }}"
                        @endif
                    </strong>
                    &nbsp;{{ trans('globals.message_no_results_01') }}.
                    <div class="row">&nbsp;</div>
                    <div class="row">
                        <div class="col-md-12">
                            {{ trans('globals.message_no_filter') }}.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    @endif

    <div class="row">
        {!! $products->appends(Request::only(['filter']))->render() !!}
    </div>
        
    @stop
@stop