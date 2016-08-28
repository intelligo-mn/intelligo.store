<div class="row">
	<iframe
	  width="100%"
	  height="300"
	  frameborder="0" style="border:0; float:left;"
	  src="https://www.google.com/maps/embed/v1/place?key={{ env('GOOGLE_MAP_KEY') }}
	    &q={{$main_company['address']}},{{$main_company['city']}}+{{$main_company['state']}}" >
	</iframe>
</div>