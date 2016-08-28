@if(isset($features) && is_array($features))
	 {{-- {{ dd($oldFeatures,$features) }}  --}}
	@foreach($features as $feature)
	@if ($feature['id']>3)
	
	@endif

		@if($force || $feature['status']=='active')

			{{-- <span>Make inputs with is one value</span> --}}

			@if($feature['input_type']=='image' || $feature['input_type']=='document' || $feature['input_type']=='video')

			<?php continue; ?>

			@endif

			@if ($force)

				<div class="form-group">

			@else

				<div class="ng-cloak" ng-show="('{{ $typeItem }}'=='{{ $feature['type_products'] }}'||'{{ $feature['type_products'] }}'=='all')">

			@endif
			@if($feature['max_num_values']==1)

	            {!! Form::label('feature_'.$feature['indexByName'],
	            				$feature['upperName'].':',
	            				['class'=>'col-sm-2 control-label']) !!}

	            <div class="col-sm-4">

	            	<div class="col-sm-8">

						@if($feature['input_type']=='text')

			                @if(strpos($feature['validation_rules'],'|numeric'))

			                {!! Form::number('feature_'.$feature['indexByName'],
			                				 $oldFeatures['feature_'.$feature['indexByName']],
			                				 ['class'=>'form-control']) !!}

			                @else

			                {!! Form::text('feature_'.$feature['indexByName'],
			                				$oldFeatures['feature_'.$feature['indexByName']],
			                				['class'=>'form-control']) !!}

							@endif

			    		@elseif($feature['input_type']=='select')

			    			@if((boolean)$feature['defaultValuesArray']['values'])

				    			@if(isset($feature['defaultValuesArray']['general']))

				    			<?php $array=[] ?>

				    			@foreach($feature['defaultValuesArray']['general'] as $row)

				    				<?php $array[$row]=$row; ?>

				    			@endforeach

				                {!! Form::select('feature_'.$feature['indexByName'],
				                				$array,
				                				$oldFeatures['feature_'.$feature['indexByName']],
				                				['class'=>'form-control']) !!}

								@endif

							@else

								@if(isset($feature['defaultValuesArray']['general']) && isset($productsDetails))

									{!! $productsDetails->callFunctions($feature['defaultValuesArray']['general']) !!}

								@endif

							@endif

			    		@elseif($feature['input_type']=='radio'||$feature['input_type']=='checkbox')

			    			@if((boolean)$feature['defaultValuesArray']['values'])

			                	@foreach($feature['defaultValuesArray']['general'] as $row)

			                		<div class="col-sm-1">

				                		@if ($feature['input_type']=='checkbox')

				                		{!! Form::checkbox('feature_'.$feature['indexByName'],$row) !!}

				                		@else

				                		{!! Form::radio('feature_'.$feature['indexByName'],$row) !!}

										@endif

			                		</div>

	            					{!! Form::label('feature_'.$feature['indexByName'],$row,['class'=>'col-sm-3']) !!}

			                	@endforeach

			    			@else

							@endif

						@endif

	            	</div>

		            @include('features.makeHelpMessagesToInput')

	            </div>
		    {{-- <span>Make inputs with is two value or more</span> --}}
			@else
			    
		        @for($i=1;$i<=$feature['max_num_values'];$i++)

		        	@if(isset($feature['helpMessageArray']['specific']))

		        		{!! Form::label('feature_'.$feature['indexByName'],
		        						$feature['helpMessageArray']['specific'][$feature['indexByName'].'_'.$i].':',
		        						['class'=>'col-sm-2 control-label']) !!}

		        	@elseif($i==1)

		        		{!! Form::label('feature_'.$feature['indexByName'],
		        						$feature['upperName'].':',
		        						['class'=>'col-sm-2 control-label']) !!}

		        	@endif

			        <div class="col-sm-4">

			            <div class="col-sm-{{ isset($feature['helpMessageArray']['specific'])?'12':'8' }}">

						@if($feature['input_type']=='text')

			            	 @if(strpos($feature['validation_rules'],'|numeric'))

			                {!! Form::number('feature_'.$feature['indexByName'].'_'.$i,
			                				$oldFeatures['feature_'.$feature['indexByName'].'_'.$i],
			                				['class'=>'form-control']) !!}

		                	@else

			                {!! Form::text('feature_'.$feature['indexByName'].'_'.$i,
			                				$oldFeatures['feature_'.$feature['indexByName'].'_'.$i],
			                				['class'=>'form-control']) !!}

							@endif

						@elseif($feature['input_type']=='select')

			    			@if((boolean)$feature['defaultValuesArray']['values'])

				    			<?php $array=[] ?>

				    			@if(isset($feature['defaultValuesArray']['general']))

				    			@foreach($feature['defaultValuesArray']['general'] as $row)

				    				<?php $array[$row]=$row; ?>

				    			@endforeach

				                {!! Form::select('feature_'.$feature['indexByName'].'_'.$i,
				                				$array,
				                				$oldFeatures['feature_'.$feature['indexByName'].'_'.$i],
				                				['class'=>'form-control']) !!}

				    			@elseif(isset($feature['defaultValuesArray']['specific']))

				    			@foreach($feature['defaultValuesArray']['specific'][$i] as $row)

				    				<?php $array[$row]=$row; ?>

				    			@endforeach

				                {!! Form::select('feature_'.$feature['indexByName'].'_'.$i,
				                				  $array,
				                				  $oldFeatures['feature_'.$feature['indexByName'].'_'.$i],
				                				  ['class'=>'form-control']) !!}

								@endif

							@else

				    			@if(isset($feature['defaultValuesArray']['general']))

				                	{!! $productsDetails->callFunctions($feature['defaultValuesArray']['general']) !!}

				    			@elseif(isset($feature['defaultValuesArray']['specific']))

				                	{!! $productsDetails->callFunctions($feature['defaultValuesArray']['specific'][$i-1]) !!}

								@endif

							@endif

						@endif

			            </div>

			            @if(!isset($feature['helpMessageArray']['specific']))

			            	@include('features.makeHelpMessagesToInput')

			            @endif

		            </div>
	            @endfor
			@endif
			</div>
		@endif
	@endforeach
@endif