@extends('layouts/master')
@section('page_class') wrapper-page @stop

@section('navigation')
	&nbsp;
@stop

@include('partial.message')

@section('content')
<div class="login-page">
  <div class="login">

    {!! Form::open(['url'=>'/register', 'class'=>'form-horizontal', 'role'=>'form']) !!}

    <form class="login-form">
      <input type="text" placeholder="{!! trans('user.first_name') !!}" name="first_name" />
      <input type="text" placeholder="{!! trans('user.last_name') !!}" name="last_name"/>
      <input type="email" placeholder="{!! trans('user.email') !!}" name="email" />
      <input type="password" placeholder="{!! trans('user.password') !!}" name="password" />

      <!-- {!! Recaptcha::render() !!} -->
      <button type="submit"> {{ trans('user.create_my_account') }}</button>
      <button class="btn-back">Буцах</button>
      <!-- нүүр хуудаслуу буцах товч-->
	  <p class="message"><a href="/login">{{  trans('user.sign_in_my_account') }}</a></p>
    </form>
    {!! Form::close() !!}
  </div>
</div>
@endsection

@section('footer')
	&nbsp;
@stop

@section('scripts')
@parent

@stop