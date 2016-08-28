@extends('layouts/master')
@section('page_class') wrapper-page @stop

@section('navigation')
	&nbsp;
@stop

@include('partial.message')

@section('content')

	<div class="content_wrapper_header">
		<h3>
			<a href="/" title="{{ trans('globals.go_back_label') }}">
				{{ trans('user.set_up_new_account') }}
			</a>
		</h3>
	</div>

<div class="content_wrapper">
	<div class="row">
		<div class="col-md-12">
			
				{!! Form::open(['url'=>'auth/register', 'class'=>'form-horizontal', 'role'=>'form']) !!}

					<div class="form-group" id="business_div" style="display:none;">
						{!! Form::label('business_name',trans('user.business_name')) !!}
						{!! Form::text('business_name', null, ['ng-disabled'=>'disabled','class'=>'form-control']) !!}
					</div>
					
					<div class="form-group">
						<div class="col-md-6 col-lg-6 ">
							{!! Form::label('first_name',trans('user.first_name')) !!}:
							<div class="input-group">
				      			<div class="input-group-addon"><span class="fa fa-align-justify"></span></div>
								{!! Form::text('first_name', null, ['ng-disabled'=>'disabled','class'=>'form-control']) !!}
							</div>
						</div>
						<div class="col-md-6 col-lg-6 ">
							{!! Form::label('last_name',trans('user.last_name')) !!}:
							<div class="input-group">
				      			<div class="input-group-addon"><span class="fa fa-align-justify"></span></div>
								{!! Form::text('last_name', null, ['ng-disabled'=>'disabled','class'=>'form-control']) !!}
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="col-md-12">
							{!! Form::label('email',trans('user.email')) !!}:
							<div class="input-group">
					      		<div class="input-group-addon"><span class="fa fa-envelope"></span></div>
								{!! Form::email('email', (\Request::get('email')!='' ? \Request::get('email') : null), ['ng-disabled'=>'disabled','class'=>'form-control']) !!}
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="col-md-12">
							{!! Form::label('password',trans('user.password')) !!}:
							<div class="input-group">
						      	<div class="input-group-addon"><span class="fa fa-lock"></span></div>
								{!! Form::password('password', ['class'=>'form-control']) !!}
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-12">
							<label>{{ trans('user.are_you_human') }}</label>
							{!! Recaptcha::render() !!}
						</div>
					</div>
					
					<div class="form-group">
						<div class="col-md-12">
							<hr>
							<div class="btn-group" role="group">
								<button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-send"></span>&nbsp;{{ trans('user.create_my_account') }}</button>
								<a href="/auth/login" class="btn btn-info"><span class="fa fa-sign-in"></span>&nbsp;{{  trans('user.sign_in_my_account') }}</a>
							</div>
						</div>
					</div>
				
				{!! Form::close() !!}
			
		</div>
	</div>
</div>

@endsection

@section('footer')
	&nbsp;
@stop

@section('scripts')
@parent

@stop