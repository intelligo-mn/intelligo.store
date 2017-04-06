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
	@stop
@endsection
{{-- Pie de pagina --}}
@section('footer')
	@parent
@stop
{{-- Javascript --}}
@section('scripts')

	@parent
@stop

