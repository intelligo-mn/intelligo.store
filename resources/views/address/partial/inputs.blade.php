<div class="row">
	
	<div class="col-lg-3 text-right">
		{!! Form::label('name_contact',trans('address.full_name').':') !!}
	</div>

	<div class="col-lg-9">
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-addon input-sm"><span class="glyphicon glyphicon-user"></span></div>
					@if (isset($address))
						{!! Form::text('name_contact', null, ['id'=>'name_contact','class'=>'form-control input-sm', 'required'=>'required', 'ng-init' => '_address.name_contact = "'.$address->name_contact.'" ', 'ng-model'=>'_address.name_contact']) !!}
					@else
						{!! Form::text('name_contact', null, ['id'=>'name_contact','class'=>'form-control input-sm', 'required'=>'required', 'ng-model'=>'_address.name_contact']) !!}
					@endif
			</div>
			<xt-validation-inline for="name_contact"></xt-validation-inline>
		</div>
	</div>

</div>

<div class="row">

	<div class="col-lg-3 text-right">
		{!! Form::label('line1',trans('address.address_line1').':') !!}
	</div>

	<div class="col-lg-9">
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-addon input-sm"><span class="glyphicon glyphicon-map-marker"></span></div>
					@if (isset($address))
						{!! Form::text('line1', null, ['id'=>'line1','class'=>'form-control input-sm', 'required'=>'required', 'ng-init' => '_address.line1 = "'.$address->line1.'" ', 'ng-model'=>'_address.line1']) !!}
					@else
						{!! Form::text('line1', null, ['id'=>'line1','class'=>'form-control input-sm', 'required'=>'required', 'ng-model'=>'_address.line1']) !!}
					@endif
			</div>
			<xt-validation-inline for="line1"></xt-validation-inline>
		</div>
	</div>
</div>

<div class="row">
	
	<div class="col-lg-3 text-right">
		{!! Form::label('line2',trans('address.address_line2').':') !!}
	</div>
		
	<div class="col-lg-9">
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-addon input-sm"><span class="glyphicon glyphicon-map-marker"></span></div>
				@if (isset($address))
					{!! Form::text('line2', null, ['id'=>'line2','class'=>'form-control input-sm', 'ng-init' => '_address.line2 = "'.$address->line2.'" ', 'ng-model'=>'_address.line2']) !!}
				@else
					{!! Form::text('line2', null, ['id'=>'line2','class'=>'form-control input-sm', 'ng-model'=>'_address.line2']) !!}
				@endif
			</div>
			<xt-validation-inline for="line2"></xt-validation-inline>
		</div>
	</div>

</div>

<div class="row">
	
	<div class="col-lg-3 text-right">
		{!! Form::label('city',trans('address.city').':') !!}
	</div>
		
	<div class="col-lg-9">
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-addon input-sm"><span class="glyphicon glyphicon-map-marker"></span></div>
				@if (isset($address))
					{!! Form::text('city', null, ['id'=>'city','class'=>'form-control  input-sm', 'required'=>'required', 'ng-init' => '_address.city = "'.$address->city.'" ', 'ng-model'=>'_address.city']) !!}
				@else
					{!! Form::text('city', null, ['id'=>'city','class'=>'form-control  input-sm', 'required'=>'required', 'ng-model'=>'_address.city']) !!}
				@endif
			</div>
			<xt-validation-inline for="city"></xt-validation-inline>
		</div>
	</div>

</div>

<div class="row">
	
	<div class="col-lg-3 text-right">
		{!! Form::label('state',trans('address.state_02').':') !!}
	</div>
		
	<div class="col-lg-9">
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-addon input-sm"><span class="glyphicon glyphicon-map-marker"></span></div>
				@if (isset($address))
					{!! Form::text('state', null, ['id'=>'state','class'=>'form-control input-sm', 'required'=>'required', 'ng-init' => '_address.state = "'.$address->state.'" ', 'ng-model'=>'_address.state']) !!}
				@else
					{!! Form::text('state', null, ['id'=>'state','class'=>'form-control input-sm', 'required'=>'required', 'ng-model'=>'_address.state']) !!}
				@endif
			</div>
			<xt-validation-inline for="state"></xt-validation-inline>
		</div>
	</div>

</div>

<div class="row">
	
	<div class="col-lg-3 text-right">
		{!! Form::label('zipcode',trans('address.zipcode').':') !!}
	</div>
		
	<div class="col-lg-9">
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-addon input-sm"><span class="glyphicon glyphicon-map-marker"></span></div>
				@if (isset($address))
					{!! Form::text('zipcode', null, ['id'=>'zipcode','minlength'=>3,'class'=>'form-control input-sm', 'required'=>'required', 'ng-init' => '_address.zipcode = "'.$address->zipcode.'" ', 'ng-model'=>'_address.zipcode']) !!}
				@else
					{!! Form::text('zipcode', null, ['id'=>'zipcode','minlength'=>3,'class'=>'form-control input-sm', 'required'=>'required', 'ng-model'=>'_address.zipcode']) !!}
				@endif
			</div>
			<xt-validation-inline for="zipcode"></xt-validation-inline>
		</div>
	</div>

</div>

<div class="row">
	
	<div class="col-lg-3 text-right">
		{!! Form::label('country', trans('address.country').':') !!}
	</div>
		
	<div class="col-lg-9">
		<div class="form-group">
			@if (isset($address))
				<select name="country" id="country" class="form-control input-sm" ng-init = "_address.country = '{{ isset($address) ? $address->country : '' }}' " ng-model = "_address.country">
					<option ng-repeat="country in countries | orderBy: 'name'" ng-value = "[[country.alpha2Code]]" value="[[country.alpha2Code]]" ng-selected = "country.name == '{{ $address->country }}'">[[country.name]]</option>
				</select>
			@else
				<select name="country" id="country" class="form-control input-sm" ng-model = "_address.country">
					<option ng-repeat="country in countries | orderBy: 'name'" ng-value = "[[country.alpha2Code]]" value="[[country.alpha2Code]]" >[[country.name]]</option>
				</select>
			@endif
			<xt-validation-inline for="country"></xt-validation-inline>
		</div>
	</div>

</div>
 
<div class="row">
	
	<div class="col-lg-3 text-right">
		{!! Form::label('phone',trans('address.phone_number').':') !!}
	</div>

	<div class="col-lg-9">
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-addon input-sm"><span class="glyphicon glyphicon-phone-alt"></span></div>
				@if (isset($address))
					{!! Form::text('phone', null, ['id'=>'phone','class'=>'form-control input-sm', 'required'=>'required', 'ng-init' => '_address.phone = "'.$address->phone.'" ', 'ng-model'=>'_address.phone']) !!}
				@else
					{!! Form::text('phone', null, ['id'=>'phone','class'=>'form-control input-sm', 'required'=>'required', 'ng-model'=>'_address.phone']) !!}
				@endif
			</div>
			<xt-validation-inline for="phone"></xt-validation-inline>
		</div>
	</div>
	<input type="hidden" ng-model = "_address.id" ng-init = "_address.id = '{{ isset($address) ? $address->id : '' }}' ">
</div>
