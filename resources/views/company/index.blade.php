@extends('layouts.wpanel')
@section('title')@parent- {{ trans('company.store_config')}} @stop
@section('panel_left_content')
@parent
@stop
@section('center_content')
<div class="container-fluid">
	<div class="row">
		<div class="panel panel-default" ng-controller = "ProfileController" >
			<div class="panel-heading">
				<h6><span class="glyphicon glyphicon-cog"></span> {{ trans('company.store_config')}}</h6>
			</div>
			<div class="panel-body" style="min-height:500px;">
				<ul class="nav nav-tabs">
				  <li class="active"><a data-toggle="tab" href="#profile">{{ trans('company.profile')}}</a></li>
				  <li><a data-toggle="tab" href="#emails">{{ trans('company.emails')}}</a></li>
				  <li><a data-toggle="tab" href="#seo">{{ trans('company.seo')}}</a></li>
				  <li><a data-toggle="tab" href="#about_us">{{ trans('company.about_us')}}</a></li>
				  <li><a data-toggle="tab" href="#refund_policy">{{ trans('company.refund_policy')}}</a></li>
				  <li><a data-toggle="tab" href="#privacy_policy">{{ trans('company.privacy_policy')}}</a></li>
				  <li><a data-toggle="tab" href="#terms_of_service">{{ trans('company.terms_of_service')}}</a></li>
				  <li><a data-toggle="tab" href="#modules">{{ trans('company.modules')}}</a></li>
				</ul>
				{!! Form::model($company, ['route'=>['wpanel.profile.update',$company], 'method'=>'PUT','role'=>'form']) !!}

				<div id="my-tab-content" class="tab-content">
			        <div class="tab-pane active" id="profile">
						@include('company.profile')
			        </div>
			         <div class="tab-pane " id="emails">
						@include('company.emails')
			        </div>
			         <div class="tab-pane " id="seo">
						@include('company.seo')
			        </div>
					 <div class="tab-pane" id="about_us">
			        	<div class="row">&nbsp;</div>
						{!! Form::textarea('about_us',null,['class'=>'form-control']) !!}
						<div class="row">&nbsp;</div>
			        </div>
			        <div class="tab-pane" id="refund_policy">
			        	<div class="row">&nbsp;</div>
						{!! Form::textarea('refund_policy',null,['class'=>'form-control']) !!}
						<div class="row">&nbsp;</div>
			        </div>
			        <div class="tab-pane" id="privacy_policy">
			        	<div class="row">&nbsp;</div>
						{!! Form::textarea('privacy_policy',null,['class'=>'form-control']) !!}
						<div class="row">&nbsp;</div>
			        </div>
			        <div class="tab-pane" id="terms_of_service">
			        	<div class="row">&nbsp;</div>
						{!! Form::textarea('terms_of_service',null,['class'=>'form-control']) !!}
						<div class="row">&nbsp;</div>
			        </div>
			        <div class="tab-pane" id="modules">
						@include('company.modules')
			        </div>
			    </div>
				<div class="row">
					<div class="col-md-6">
						<button type="submit" class="btn btn-primary">
						{{ trans('globals.save') }}
						</button>
					</div>
				</div>
				<input type="hidden" name="_token" value="{{ csrf_token() }}">
				{!! Form::close(); !!}
			</div>
		</div>
	</div>
</div>
@stop
@section('script')
@parent
@stop