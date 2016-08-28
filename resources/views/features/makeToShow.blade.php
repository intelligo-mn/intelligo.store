@if(isset($globalFeatures) && is_array($globalFeatures))
	<strong ng-hide="count==0">{{ trans('store.features') }}:</strong>
	<?php $num = count($globalFeatures) ?>
	<ul ng-hide="count==0">
	{{-- {{dd($features,$globalFeatures)}} --}}
	{{-- {{ dd([$globalFeatures,$features,$product->features]) }} --}}
	@foreach($globalFeatures as $feature)
		@if (isset($feature))
			@if($feature['input_type']=='image' || $feature['input_type']=='document' || $feature['input_type']=='video')
				<?php $num-- ?>
			@elseif( isset($features[$feature['indexByName']]))
				<li>
				{{-- <span>Make inputs with is one value</span> --}}
				@if($feature['max_num_values']==1)
					<strong>{{ $feature['upperName'] }}: </strong>
					@if(is_array($features[$feature['indexByName']]))
						<span>{{ $features[$feature['indexByName']][0] }}</span>
						<span>{{ $features[$feature['indexByName']][1] }}</span>
					@else
						<span>{{ ucfirst($features[$feature['indexByName']]) }}</span>
					@endif
				{{-- <span>Make inputs with is two value or more</span> --}}
				@else
					<strong>{{ $feature['upperName'] }}: </strong>
				    @for($i=0;$i<$feature['max_num_values'];$i++) <br/>
						@if(isset($features[$feature['indexByName']][$i]))
							@if(is_array($features[$feature['indexByName']][$i]))
								<span>{{ $features[$feature['indexByName']][$i][0] }}</span>
								<span>{{ $features[$feature['indexByName']][$i][1] }}</span>
							@else
								<span>{{ ucfirst($features[$feature['indexByName']][$i]) }}</span>
							@endif
						@endif
						@if($i!=$feature['max_num_values'])
							{{-- <span>,</span> --}}
						@endif
				    @endfor
				@endif
				</li>
			@else
				<?php $num-- ?>
			@endif
		@endif
	@endforeach
	</ul>
	<span ng-init="count={{ $num }}"></span>
@endif