@extends('layouts/master')

@section('title')@parent- {{ trans('user.dashboard') }} @stop

@section('page_class') 'user-dashboard' @stop

@section('content')
	@parent
	@section('panel_left_content')
		@include('user.partial.menu_dashboard')
	@stop
	@section('center_content')

		<div class="page-header">
			<h5>{{ trans('user.dashboard') }}</h5>
		</div>

	  	@if (\Auth::check() && \Auth::user()->hasRole(['business','admin']))

			<div class="row">
				<div class="col-md-12">
					<a class="btn btn-info btn-sm pull-right" ng-href="{{route('products.create')}}"><span class="glyphicon glyphicon-plus"></span>&nbsp;{{ trans('product.globals.add') }}</a>
				</div>
			</div>

			<div class="row">&nbsp;</div>

			<div class="list-group">
				<a href="javascript:void(0);" class="list-group-item active">{{ trans('user.your_products') }}</a>
				<a href="{{ route('products.myProducts') }}" class="list-group-item">{{ trans('globals.all') }}<span class="badge">{{ $products['all'] }}</span></a>
				<a href="{{ route('products.myProducts').'?filter=active' }}" class="list-group-item">{{ trans('globals.active') }}<span class="badge">{{ $products['active'] }}</span></a>
				<a href="{{ route('products.myProducts').'?filter=inactive' }}" class="list-group-item">{{ trans('globals.inactive') }}<span class="badge">{{ $products['inactive'] }}</span></a>
				<a href="{{ route('products.myProducts').'?filter=low' }}" class="list-group-item">{{ trans('product.inputs_view.low_stock') }}<span class="badge">{{ $products['lowStock'] }}</span></a>
			</div>

			<div class="list-group">
				<a href="javascript:void(0);" class="list-group-item active">{{ trans('user.your_sales') }}</a>
				<a href="{{ route('orders.pendingOrders') }}" class="list-group-item">{{ trans('store.all_transactions') }}<span class="badge">{{ $sales['all'] }}</span></a>
				<a href="javascript:void(0);" class="list-group-item"><strong>{{ trans('store.grand_total') }}</strong><span class="badge">{{ \Utility::showPrice($sales['total']) }}</span></a>
				<a href="{{ route('orders.pendingOrders') }}" class="list-group-item">{{ trans('store.openOrders') }}<span class="badge">{{ $sales['open'] }}</span></a>
				<a href="{{ route('orders.pendingOrders').'?show=closed' }}" class="list-group-item">{{ trans('store.closedOrders') }}<span class="badge">{{ $sales['closed'] }}</span></a>
				<a href="{{ route('orders.pendingOrders').'?show=canceled' }}" class="list-group-item">{{ trans('store.canceledOrders') }}<span class="badge">{{ $sales['cancelled'] }}</span></a>
				<a href="{{ route('orders.pendingOrders').'?show=rate' }}" class="list-group-item">{{ trans('store.rated_orders') }}<span class="badge">{{ ($sales['rate']) }}</span></a>
			</div>

		@else

			<div class="list-group">
				<a href="javascript:void(0);" class="list-group-item active">{{ trans('user.your_orders') }}</a>
				<a href="{{ route('orders.show_orders') }}" class="list-group-item">{{ trans('globals.all') }}&nbsp;<span class="badge">{{ $orders['all'] }}</span></a>
				<a href="{{ route('orders.show_orders') }}" class="list-group-item">{{ trans('store.openOrders') }}&nbsp;<span class="badge">{{ $orders['open'] }}</span></a>
				<a href="{{ route('orders.show_orders').'?show=closed' }}" class="list-group-item">{{ trans('store.closedOrders') }}&nbsp;<span class="badge">{{ $orders['closed'] }}</span></a>
				<a href="{{ route('orders.show_orders').'?show=canceled' }}" class="list-group-item">{{ trans('store.canceledOrders') }}&nbsp;<span class="badge">{{ $orders['cancelled'] }}</span></a>
				<a href="{{ route('orders.show_orders').'?show=rate' }}" class="list-group-item">{{ trans('store.waiting_for_rating') }}&nbsp;<span class="badge">{{ $orders['nopRate'] }}</span></a>
			</div>

		@endif
	@stop
@endsection
{{-- Pie de pagina --}}
@section('footer')
	@parent
@stop
{{-- Javascript --}}
@section('scripts')
<script>

	(function() {
		var app = angular.module('AntVel');
		app.controller('DashboardController',function(){});

	})();
</script>
	@parent
@stop

