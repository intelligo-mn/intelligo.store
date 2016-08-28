<!DOCTYPE html>

<html lang="{{ App::getLocale() }}" ng-app="AntVel">

<head>
	<meta charset="utf-8">
	<title>@section('title'){{ $main_company['website_name']}} @show</title>

	{!! Html::style('/css/vendor/bootstrap.css') !!}
	
	@section('css')
		{!! Html::style('/css/app.css') !!}
	@show
</head>

<body>
	<div class="container">
		<div class="panel panel-default @section('classPanel') @show">
			@section('content')
			

			@show
			<p>
				<a class="btn btn-primary" href="/home" role="button"> @section('btn-back') @show</a>
			</p>
		</div>
	</div>
</body>
</html>