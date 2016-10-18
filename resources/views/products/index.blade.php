@extends('layouts.master')

@section('title')@parent - {{ trans('store.products') }} @stop

@section('page_class') products_view @stop

@section('css')
    @parent
@stop

@section('content')

    <div id="menu-top-category" class="container">
         <div class="row">&nbsp;</div>
         <ol class="breadcrumb">
            <li class="total">
                <span class="badge">{{ $products->total() }}</span> <small> {{ trans('globals.searchResults') }} </small>
            </li>
            <?php $filterSelected = []; ?>
            @foreach ($refine as $key => $value)
                @if (trim($value)!='' && $key != 'category_name' && $key != 'page')
                    <li>
                        <small>
                            <?php
                                switch ($key)
                                {
                                    case 'max': $breadcrumb = trans('globals.max_price_label'); break;
                                    case 'min': $breadcrumb = trans('globals.min_price_label'); break;
                                    case 'category': $breadcrumb = $key; $value = $refine['category_name']; break;
                                    case 'search': $breadcrumb = trans('globals.result_for'); break;
                                    default: $breadcrumb = $key; break;
                                }
                                $filterSelected[$key] = [
                                    'label' => ucwords($value),
                                    'url' => "/products?".\Utility::removeFromUrlQueryString($refine, $key)
                                ];
                            ?>
                            <strong>{{ ucwords($breadcrumb) }}:</strong>&nbsp;{{ ucwords($value) }}
                            <a href="/products?{{ \Utility::removeFromUrlQueryString($refine, $key) }}">
                                <span class="glyphicon glyphicon-remove"></span>
                            </a>
                        </small>
                    </li>
                @endif
            @endforeach

         </ol>
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

                <div id="menu-left-category" class="navbar-collapse collapse sidebar-navbar-collapse" ng-cloak>

                    <div class="filters-applied ng-cloak visible-xs" ng-show="filters" >
                        <span ng-repeat="filter in filters">
                            <button type="button" class="text-capitalize btn btn-warning btn-xs"  ng-click="removeFilter(filter)">
                                <span ng-bind-html="(filter.value.name)? filter.value.name:filter.value"></span>
                                <span data-role="remove" class="glyphicon glyphicon-remove"></span>
                            </button>
                        </span>
                    </div>

                   @foreach ($filters as $key => $filter)
                        {{-- filter menu --}}
                        <ul class="nav navbar-nav {{ $key }}" >
                            <h4 class="small breadcrumb @if($key=='categories') no_margin_top @endif">{{ trans('globals.filters.'.$key) }}</h4>
                            <?php $i=0; ?>
                            @if($key=='category')
                                @foreach ($filter as $id => $item)
                                    <?php if (5<$i++){ break; } ?>
                                    <li>
                                        <a href="/products?{{ \Utility::getUrlQueryString($refine, 'category', urlencode($item['id'].'|'.$item['name'])) }}">
                                            {{ ucfirst($item['name']) }} <small><span class="badge">{{ $item['qty'] }}</span></small>
                                        </a>
                                    </li>
                                @endforeach

                            @else

                                @foreach ($filter as $item => $count)
                                    <?php if (5<$i++){ break; } ?>
                                    <li>
                                        <a href="/products?{{ \Utility::getUrlQueryString($refine, $key, urlencode($item)) }}">
                                          {{ ucfirst($item) }} <span class="badge">{{ $count }}</span>
                                        </a>
                                    </li>
                                @endforeach
                            @endif
                        </ul>
                        {{-- end menu --}}

                        {{-- see more modal --}}
                        <script type='text/ng-template' id="{{ $key }}-snippet" class="panel">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button ng-click="$close(false)" type="button" class="close"><span aria-hidden="true">&times;</span></button>
                                    {{ trans('globals.filters.'.$key) }}
                                </div>
                                <div class="modal-body">
                                    <div class="container-fluid">
                                        <ul class="list-inline">
                                            @if($key=='category')
                                                @foreach ($filter as $id => $item)
                                                <li class="text-capitalize  col-xs-12 col-sm-4 col-md-4">
                                                    <a href="/products?{{ \Utility::getUrlQueryString($refine, 'category', urlencode($item['id'].'|'.$item['name'])) }}" >
                                                        {{ $item['name'] }} <span class="badge">{{ $item['qty'] }}</span>
                                                    </a>
                                                </li>
                                                @endforeach
                                            @else
                                                @foreach ($filter as $item => $count)
                                                <li class="text-capitalize  col-xs-12 col-sm-4 col-md-4">
                                                    <a href="/products?{{ \Utility::getUrlQueryString($refine, $key, urlencode($item)) }}" >
                                                        {{ $item }} <span class="badge">{{ $count }}</span>
                                                    </a>
                                                </li>
                                                @endforeach
                                            @endif
                                        </ul>
                                    </div>
                                </div>
                                <div class="modal-footer clearfix">
                                    <button ng-click="$close(false)" class="btn btn-info btn-sm pull-left">
                                        {{ trans('globals.close_label') }}
                                    </button>
                                </div>
                            </div>
                        </script>

                        {{-- end see more     --}}
                        @if ($i > 6)
                            <small ng-controller="ModalCtrl" ng-click="modalOpen({templateUrl:'{{ $key }}-snippet', size: 'md'})" >
                                <a href="javascript:void(0)">
                                    <span class="glyphicon glyphicon-zoom-in"></span>&nbsp;
                                    {{ trans('globals.see_more') }}
                                </a>
                            </small>
                        @elseif($i == 0)
                            <ul class="nav navbar-nav" >
                                <li><a href="javascript:window.history.back()"><span class="glyphicon glyphicon-menu-left"></span>&nbsp;{{ trans('globals.go_back_label') }}</a></li>
                                @if (isset($filterSelected[$key]) && count($filterSelected) > 0)
                                <li>
                                    <a href="{{ ucwords($filterSelected[$key]['url']) }}">
                                        <span class="glyphicon glyphicon-remove"></span>&nbsp;
                                        {{ ucwords($filterSelected[$key]['label']) }}
                                    </a>
                                </li>
                                @endif
                            </ul>
                        @endif
                    @endforeach

                    <ul class="nav navbar-nav list-group price-range">
                        <h4 class="small breadcrumb">{{ trans('globals.filters.price_range') }}</h4>
                        <li>
                            <div class="row">
                                <div class="col-md-10">
                                    <form method="GET" action="/products" name="rangepriceForm" novalidate>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-addon input-sm">$</div>
                                                <input class="form-control input-sm" type="number" value="{{ isset($refine['min']) ? $refine['min'] : '' }}" name="min" id="min" placeholder="{{ trans('globals.min_label') }}">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                 <div class="input-group">
                                                    <div class="input-group-addon input-sm">$</div>
                                                    <input class="form-control input-sm" type="number" value="{{ isset($refine['max']) ? $refine['max'] : '' }}" name="max" id="max" placeholder="{{ trans('globals.max_label') }}">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-success btn-sm">
                                                <span class="glyphicon glyphicon-filter"></span>&nbsp;
                                                {{ trans('globals.go_label') }}
                                            </button>
                                        </div>
                                        @foreach ($refine as $key => $value)
                                            @if (trim($value)!='' && $key != 'category_name' && $key != 'min' && $key != 'max')
                                                <?php $value = $key == 'category' ? $value.'|'.urlencode($refine['category_name']) : $value; ?>
                                                <input type="hidden" name="{{ $key }}" id="{{ $key }}" value="{{ $value }}">
                                            @endif
                                        @endforeach
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-2">&nbsp;</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    @stop

    @section('center_content')
        <div class="container-fluid marketing">
            @if (count($products) > 0)
                <div class="row">
                    @foreach ($products->toArray()['data'] as $product)
                        @include('products.partial.productBox', $product)
                    @endforeach
                </div>
            @else
                <div class="row">
                    <div class="alert alert-warning alert-dismissible" role="alert">
                        <div class="row">
                            <div class="col-md-12">
                                <strong>
                                    <span class="glyphicon glyphicon-filter"></span>&nbsp;
                                    {{ trans('globals.your_search') }}
                                </strong>
                                &nbsp;{{ trans('globals.message_no_results_01') }}.
                            </div>
                        </div>
                        <div class="row">&nbsp;</div>
                        <div class="row">
                            <div class="col-md-12">
                                {{ trans('globals.message_no_results_02') }}.
                            </div>
                        </div>
                    </div>
                </div>
            @endif

            @if(isset($suggestions) && is_array($suggestions) && count($suggestions) > 0)
                <div class="row">&nbsp;</div>
                <div class="row">&nbsp;</div>
                <div class="row">
                    <h4 >{{ count($products) == 0 ? trans('store.suggestions.trends_unlogged') : trans('store.suggestions.my_search') }}</h4>
                    <hr>
                    <section class="products_view">
                            <div class="container-fluid marketing">
                                <div class="row">
                                    @foreach ($suggestions as $productSuggestion)
                                        @include('products.partial.productBox', $productSuggestion)
                                    @endforeach
                                </div>
                            </div>
                    </section>
                </div>
            @endif

            <div class="row">
                {!! $products->appends(Request::only(['category', 'search', 'conditions', 'brands', 'color', 'model', 'min', 'max']))->render() !!}
            </div>
        </div>
    @stop
@stop

