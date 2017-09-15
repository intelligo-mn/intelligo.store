@extends("app")

@section('content')
	<div class="wt-container">
		<div class="global-container container">

			<div class="content" style="float:none;margin:100px auto;width:500px">
		@include("_forms._signupform", ['link' => 'static'])
			</div>
	</div>
</div>
@endsection
@section('footer')
	<script>
		$( document ).ready(function() {
			App.initRegisterClicks();
		});
	</script>
@endsection