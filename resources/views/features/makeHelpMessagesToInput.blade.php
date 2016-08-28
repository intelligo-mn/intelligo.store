<label class="col-sm-4">
	
		@if(isset($feature))
			@if(isset($feature['helpMessageArray']['general']))

				{{ $feature['helpMessageArray']['general'] }}

			@elseif(isset($feature['helpMessageArray']['specific']))

				{{ $feature['helpMessageArray']['specific'][$feature['indexByName'].'_'.$i] }}

			@elseif(isset($feature['helpMessageArray']['general_selection']))
			
				<?php $array=[] ?>

				@foreach($feature['helpMessageArray']['general_selection'] as $row)

					<?php $array[$row]=$row ?>

				@endforeach

				{!! Form::select('help_msg_'.$feature['indexByName'], $array,null,['class'=>'form-control']) !!}

			@elseif(isset($feature['helpMessageArray']['specific_selection']))

				<?php $array=[] ?>

				@foreach($feature['helpMessageArray']['specific_selection'][$feature['indexByName'].'_'.$i] as $row)

					<?php $array[$row]=$row ?>

				@endforeach

				{!! Form::select('help_msg_'.$feature['indexByName'].'_'.$i,$array,null,['class'=>'form-control']) !!}

			@endif
		@endif
	
</label>