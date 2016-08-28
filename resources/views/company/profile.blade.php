<div class="row">&nbsp;</div>
<div class="row">
	<div class="col-md-6">
		<label class="control-label">{{ trans('company.company_name')}}:</label>
		{!! Form::text('name',null,['class'=>'form-control']) !!}
	</div>
	<div class="col-md-6">
		<label class="control-label">{{ trans('company.website_name')}}:</label>
		{!! Form::text('website_name',null,['class'=>'form-control']) !!}
	</div>
 </div>
<div class="row">
	<div class="col-md-6">
		<label class="control-label">{{ trans('company.slogan')}}:</label>
		{!! Form::text('slogan',null,['class'=>'form-control']) !!}
	</div>
	<div class="col-md-3">
		<label class="control-label">{{ trans('address.phone')}}:</label>
		{!! Form::text('phone_number',null,['class'=>'form-control']) !!}
	</div>
	<div class="col-md-3">
		<label class="control-label">{{ trans('company.cell_phone')}}:</label>
		{!! Form::text('cell_phone',null,['class'=>'form-control']) !!}
	</div>
</div>
<div class="page-header">
	<h6>{{ trans('address.address')}}</h6>
</div>
<div class="row">
	<div class="col-md-12">
		<label class="control-label">{{ trans('address.address')}}:</label>
		{!! Form::text('address',null,['class'=>'form-control']) !!}
	</div>

	
	<div class="col-md-4">
		<label class="control-label">{{ trans('address.city')}}:</label>
		{!! Form::text('city',null,['class'=>'form-control']) !!}
	</div>
	<div class="col-md-4">
		<label class="control-label">{{ trans('address.state')}}:</label>
		{!! Form::text('state',null,['class'=>'form-control']) !!}
	</div>
		<div class="col-md-4">

		<label class="control-label">{{ trans('address.zipcode')}}:</label>
		{!! Form::text('zip_code',null,['class'=>'form-control']) !!}
	</div>

</div>

<div class="row">


	<div class="col-md-6">
		<label class="control-label">{{ trans('company.google_maps_key_api')}}:
			<a href="https://developers.google.com/maps/documentation/embed/guide#api_key" target="_blank">
				<span class="glyphicon glyphicon-question-sign"></span>
			</a>
		</label>
		{!! Form::text('google_maps_key_api',null,['class'=>'form-control']) !!}
		
	</div>
</div>
<div class="page-header">
	<h6>{{ trans('user.social_info')}}</h6>
</div>
<div class="row">
	<div class="col-md-6">
			<label class="control-label">{{ trans('company.facebook')}}:</label>
			{!! Form::text('facebook',null,['class'=>'form-control']) !!}
	</div>
	<div class="col-md-6">
			<label class="control-label">{{ trans('company.twitter')}}:</label>
			{!! Form::text('twitter',null,['class'=>'form-control']) !!}
	</div>
	<div class="col-md-6">
			<label class="control-label">{{ trans('company.facebook_app_id')}}:
				<a href="https://developers.facebook.com/docs/apps/register" target="_blank">
					<span class="glyphicon glyphicon-question-sign"></span>
				</a>
			</label>
			{!! Form::text('facebook_app_id',null,['class'=>'form-control']) !!}
	</div>
</div>

<div class="row">&nbsp;</div>
