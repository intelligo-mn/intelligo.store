@extends('layouts.master')
@section('title')@parent - {{ trans('store.cart_view.your_shopping_cart') }} @stop
@section('page_class')products_view @stop

@section('css')
    @parent
@stop

@section('content')
    @parent

	@section('panel_left_content')

		<div class="panel panel-default">
			<div class="panel-heading">Panel heading</div>
			<div class="panel-body">
				Panel content
			</div>
			<div class="panel-footer">Panel footer</div>
		</div>

	@stop

    @section('center_content')

		<div ng-controller = "ShoppingCart">

		<div class="page-header">
            <h5>{{ trans('store.cart_view.your_shopping_cart') }}</h5>
        </div>

        <div class="row">
			<div class="col-sm-6 text-left">
				&nbsp;
			</div>

			<div class="col-sm-4 text-center">
				<h6>{{ trans('store.price') }}</h6>
			</div>

			<div class="col-sm-2 text-center">
				<h6>{{ trans('store.quantity_long') }}</h6>
			</div>
        </div>

		<div class="row">&nbsp;</div>

		@if ($cart)
			@foreach ($cart['details'] as $product)

				<div class="row">
					<div class="col-sm-6 text-left">
						<div class="media">
							<div class="media-left media-middle">
								<a href="#">
									<img class="img-rounded thumbnail media-object" src="{{ $product['product']['features']['images'][0] }}" alt="{{ $product['product']['name'] }}" width="100" height="100" >
								</a>
							</div>
							<div class="media-body">
								<strong class="media-heading">{{ $product['product']['name'] }}</strong>
								<p>{{ $product['product']['description'] }}</p>
							</div>
						</div>
					</div>

					<div class="col-sm-4 text-center">
						{{ $product['product']['price'] }}
					</div>

					<div class="col-sm-2 text-center">
						<div class="dropdown">
						<button class="btn btn-default btn-xs dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						[[ qty ]]
						<span class="caret"></span>
						</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
							<!-- @for ($i=2; $i <= $product['product']['stock']; $i++)
								@if ($i < 10)
									<li ng-change = "changeQty('{{ $i }}');">
										<a href="javascript:void(0);">{{ $i }}</a>
									</li>
								@endif
							@endfor
							@if ($product['product']['stock'] > 10)
								<li role="separator" class="divider"></li>
								<li><a href="javascript:void(0);">10+</a></li>
							@endif -->
						</ul>
						</div>
					</div>

				</div>
				<hr>
			@endforeach
		@endif

		</div>

    @stop

@stop

@section('scripts')
    @parent
    <script>
        (function(app){

           app.controller('ShoppingCart', ['$scope','$http', function($scope, $http)
           {
           		$scope.qty = '1';

           		$scope.changeQty = function (qty)
           		{
           			$scope.qty = qty;
           		}


           }]);


        })(angular.module("Bella"));
    </script>
@stop
