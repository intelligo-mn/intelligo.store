@extends("app")

@section('content')
	<div class="content" style="background-color: #f1f1f1">
		<div class="container" style="padding:30px 0 50px 0; max-width:500px">
			@include("_forms._loginform", ['link' => 'static'])
		</div>
	</div>

@endsection
@section('footer')
	<script>
		$( document ).ready(function() {
			App.initLoginClicks();
		});
	</script>
@endsection