@extends('layouts/master')

@section('page_class') wrapper-page @stop

@section('navigation')
	&nbsp;
@stop

@include('partial.message')

@section('content')


	<div class="content_wrapper login-content-wrapper">
	    <div class="row" ng-controller="LoginController">
	    	<div class="col-md-12">
	    		
	    		{!! Form::open(['url'=>'/auth/login','name'=>'loginForm', 'class'=>'form-horizontal','role'=>"form",'method'=>"POST"]) !!}
	    		
				<div class="form-group">
					<div class="input-group">
	      				<div class="input-group-addon"><span class="fa fa-envelope-o"></span></div>
						<input type="email" class="form-control" name="email" value="{{ old('email') }}" required>
					</div>
				</div>

				<div class="form-group">
					<div class="input-group">
	  					<div class="input-group-addon"><span class="fa fa-lock"></span></div>
						<input ng-disabled="!havePassword" type="password" class="form-control" name="password">
					</div>
				</div>
					
				<label>
					<input ng-disabled="!havePassword" type="checkbox" name="remember"> {{ trans('user.remember_me') }}
					
				</label>
				<div class="form-group" style="height: 81px">
					{!! Recaptcha::render() !!}
				</div>
			    
				<div class="form-group">

					<a style="100%" href="{{ url('/password/email') }}">
						{{ trans('user.forgot_your_password') }}
					</a>

					<a style="100%" href="{{ url('/auth/register') }}">
						{{ trans('user.create_my_account') }}
					</a>
					<button type="submit" class="btn btn-primary">
						<span class="fa fa-sign-out"></span>&nbsp;
						{{ trans('user.sign_in_my_account') }}
					</button>
				</div>
				
				{!! Form::close() !!}
	    	
	    	</div> {{-- col --}}

	    </div> {{-- row --}}

	</div> {{-- panel --}}
@endsection

@section('footer')
	&nbsp;
@endsection
