@extends('layouts.master')
@section('page_class')@parent- {{ trans('about.contact_us') }}@endsection
{{-- NAVBAR --}}
@section('navigation')
@include('partial.navigation_basic')
@endsection
{{-- CONTENT --}}
@section('content')
<div class="container-fluid">
	<div class="row jumbotron col-md-10 col-md-offset-1" style="min-height:600px;">
		<ul class="nav nav-tabs">
			<li class="{{ $tab=='about'?'active':'' }}"><a data-toggle="tab" href="#about_us">{{ trans('company.about_us')}}</a></li>
			<li class="{{ $tab=='refund'?'active':'' }}"><a data-toggle="tab" href="#refund_policy">{{ trans('company.refund_policy')}}</a></li>
			<li class="{{ $tab=='privacy'?'active':'' }}"><a data-toggle="tab" href="#privacy_policy">{{ trans('company.privacy_policy')}}</a></li>
			<li class="{{ $tab=='terms'?'active':'' }}"><a data-toggle="tab" href="#terms_of_service">{{ trans('company.terms_of_service')}}</a></li>
		</ul>
		<div id="my-tab-content" class="tab-content">
			<div class="tab-pane {{ $tab=='about'?'active':'' }}" id="about_us">
				<div class="well">{{ $main_company['about_us'] }}</div>
			</div>
			<div class="tab-pane {{ $tab=='refund'?'active':'' }}" id="refund_policy">
				<div class="well"><pre class="pre-scrollable">{{ $main_company['refund_policy'] }}</pre> </div>
			</div>
			<div class="tab-pane {{ $tab=='privacy'?'active':'' }}" id="privacy_policy">
				<div class="well"><pre class="pre-scrollable">{{ $main_company['privacy_policy'] }}</pre></div>
			</div>
			<div class="tab-pane {{ $tab=='terms'?'active':'' }}" id="terms_of_service">
				<div class="well"><pre class="pre-scrollable">{{ $main_company['terms_of_service'] }}</pre></div>
			</div>
		</div>
	</div>
</div>
@endsection
{{-- Pie de pagina --}}
@section('footer')
@parent
@endsection
{{-- Angular --}}
@section('before.angular') @endsection
{{-- Javascript --}}
@section('scripts')
@parent
@endsection