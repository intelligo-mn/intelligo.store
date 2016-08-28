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
		    	{{ trans('user.sign_in_your_account') }}
		    </a>
	    </h3>
    </div>

	<div class="content_wrapper">
	    <div class="row" ng-controller="LoginController">
	    	<div class="col-md-12">
	    		
	    		{!! Form::open(['url'=>'/auth/login','name'=>'loginForm', 'class'=>'form-horizontal','role'=>"form",'method'=>"POST"]) !!}
	    		
				<div class="form-group">
					<h6 class="black_color">{{ trans('user.email_address') }}</h6>
					<div class="input-group">
	      				<div class="input-group-addon"><span class="fa fa-envelope-o"></span></div>
						<input type="email" class="form-control" name="email" value="{{ old('email') }}" required>
					</div>
				</div>

				<div class="form-group">
					<h6 class="black_color">{{ trans('user.password_message.do_you_have') }}</h6>
					<div class="input-group">
	  					<div class="input-group-addon"><span class="fa fa-lock"></span></div>
						<input ng-disabled="!havePassword" type="password" class="form-control" name="password">
					</div>
					<label>
						&nbsp;<input name="newuser" type="radio" value="0" ng-click="setHavePassword(true)" checked="havePassword">&nbsp;{{ trans('user.password_message.have') }}
						<br>
						&nbsp;<input name="newuser" type="radio" value="1" ng-click="setHavePassword(false)">&nbsp;{{ trans('user.password_message.nohave') }}
					</label>
				</div>
					
				<div class="form-group" style="height: 120px">
					<h6 class="black_color">{{ trans('user.are_you_human') }}</h6>
					{!! Recaptcha::render() !!}
				</div>

				<div class="form-group">
					<label>
						<input ng-disabled="!havePassword" type="checkbox" name="remember"> {{ trans('user.remember_me') }}
						&nbsp;|&nbsp;
						<a style="100%" href="{{ url('/password/email') }}">
						<span class="fa fa-paper-plane-o"></span>&nbsp;
						{{ trans('user.forgot_your_password') }}?
					</a>
					</label>
				</div>
		
				<div class="form-group">
					<hr>
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
